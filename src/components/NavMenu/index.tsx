'use client';

import { useState } from 'react';
import styles from './NavMenu.module.scss';
import { FaChevronDown, FaFilter } from 'react-icons/fa';

const categories = ['Todos os Produtos', 'Camisetas', 'Canecas'];

export default function NavMenu() {
  const [activeCategory, setActiveCategory] = useState('Todos os Produtos');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.link} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.sort}>
        <span>Ordenar por</span>
        <FaChevronDown size={12} />
      </div>

      {/* Botão filtro só no mobile */}
      <button className={styles.filterButton} aria-label="Filtro" type="button">
        <FaFilter size={20} />
      </button>
    </nav>
  );
}
