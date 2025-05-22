import { PaginationProps } from '@/types/PaginationProps';
import styles from './Pagination.module.scss';

export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        {pages.map((p) => (
          <button
            key={p}
            className={`${styles.page} ${p === page ? styles.active : ''}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}

        <button
          className={styles.arrow}
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        
        <button
          className={styles.arrow}
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
