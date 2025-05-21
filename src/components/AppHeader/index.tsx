import styles from "./AppHeader.module.scss";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

export function AppHeader() {

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

            <FiShoppingBag className={styles.icon} />
          </div>
        </nav>
      </header>

        <div className={styles.mobileSearchBar}>
          <input
            type="text"
            placeholder="Procurando por algo específico?"
            className={styles.mobileInput}
          />
          <FiSearch className={styles.mobileSearchIcon} />
        </div>
    </>
  );
}
