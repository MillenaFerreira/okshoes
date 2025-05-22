import { useState } from "react";
import styles from "./AppHeader.module.scss";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AppHeaderProps } from "@/types/AppHeaderProps";

export function AppHeader({ onSearchChange }: AppHeaderProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <>
      <header className={styles.appHeaderWrapper} id="home">
        <nav className={styles.navbar}>
          <div className={styles.logo}>oknshoes</div>

          <div className={styles.actions}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Procurando por algo específico?"
                className={styles.search}
                value={search}
                onChange={handleSearch}
              />
              <FiSearch className={styles.searchIcon} />
            </div>

            <FiShoppingBag className={styles.icon} />
          </div>
        </nav>
      </header>

        <div className={styles.mobileSearchBar}>
          <input
            type="text"
            placeholder="Procurando por algo específico?"
            className={styles.mobileInput}
            value={search}
            onChange={handleSearch}
          />
          <FiSearch className={styles.mobileSearchIcon} />
        </div>
    </>
  );
}
