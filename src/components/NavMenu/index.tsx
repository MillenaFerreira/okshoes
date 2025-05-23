'use client';

import { NavMenuProps } from '@/types/NavMenuProps';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from './NavMenu.module.scss';

const categories = [
  { label: 'Todos os Produtos', value: 'all' },
  { label: 'Camisetas', value: 't-shirts' },
  { label: 'Canecas', value: 'mugs' },
];

const sortOptions = [
  { label: 'Maior preço', value: 'high-price' },
  { label: 'Menor preço', value: 'low-price' },
  { label: 'Mais vendido', value: 'most-sold' },
  { label: 'Menos vendido', value: 'least-sold' },
];

export default function NavMenu({
  activeCategory,
  onCategoryChange,
  onSortChange
}: NavMenuProps) {

  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  function closeSidebar() {
    setShowCategories(false);
  }

  return (
    <nav className={styles.navWrapper}>
      <button
        className={styles.filterButton}
        aria-label="Filtro"
        type="button"
        onClick={() => setShowCategories(true)}
      >
        <FaFilter size={20} />
      </button>

      {!showCategories && (
        <div className={styles.nav}>
          {categories.map(({ label, value }) => (
            <button
              key={value}
              className={`${styles.link} ${activeCategory === value ? styles.active : ''}`}
              onClick={() => onCategoryChange(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      )}
      
      {showCategories && (
        <>
          <div className={styles.sidebar}>
            <button
              className={styles.closeButton}
              onClick={closeSidebar}
              aria-label="Fechar menu"
            >
              &times;
            </button>
            <h2>Categorias</h2>
            <div className={styles.categoriesList}>
              {categories.map(({ label, value }) => (
                <button
                  key={value}
                  className={`${styles.link} ${activeCategory === value ? styles.active : ''}`}
                  onClick={() => {
                    onCategoryChange(value);
                    closeSidebar();
                  }}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.overlay} onClick={closeSidebar} />
        </>
      )}

      <div className={styles.sort}>
        <div onClick={() => setOpen(!open)} className={styles.sortToggle}>
          <label htmlFor="sort" className={styles.sortLabel}>
            Ordenar por
          </label>
          <span className={styles.arrow}>{open ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
        </div>

        {open && (
          <ul className={styles.menu}>
            {sortOptions.map(({ label, value }) => (
              <li
                key={value}
                onClick={() => {
                  onSortChange(value);
                  setOpen(false);
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
