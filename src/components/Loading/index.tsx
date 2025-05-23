import styles from "./Loading.module.scss";

export function Loading() {
    return (
        <div className={styles.containerLoading}>
            <div className={styles.customLoading}></div>
        </div>
    );
}
