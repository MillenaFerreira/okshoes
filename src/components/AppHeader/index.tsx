import styles from "./AppHeader.module.scss";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { useState } from "react";

export function AppHeader() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

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
              />
              <FiSearch className={styles.searchIcon} />
            </div>

            <FiSearch
              className={styles.mobileSearchIcon}
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            />

            <FiShoppingBag className={styles.icon} />
          </div>
        </nav>
      </header>

      {showMobileSearch && (
        <div className={styles.mobileSearchBar}>
          <input
            type="text"
            placeholder="Procurando por algo específico?"
            className={styles.mobileInput}
          />
        </div>
      )}
    </>
  );
}
