'use client';

import { NavMenuProps } from '@/types/NavMenuProps';
import styles from './NavMenu.module.scss';
import { FaChevronDown, FaFilter } from 'react-icons/fa';

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
  onSortChange,
  products,
}: NavMenuProps) {
  return (
    <nav className={styles.navWrapper}>
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

      <div className={styles.sort}>
        <label htmlFor="sort" className={styles.sortLabel}>
          Ordenar por
        </label>
        <select
          id="sort"
          className={styles.sortSelect}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button className={styles.filterButton} aria-label="Filtro" type="button">
        <FaFilter size={20} />
      </button>
    </nav>
  );
}