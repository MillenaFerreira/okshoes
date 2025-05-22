import { Product } from '@/types/Product';
import styles from './ProductCard.module.scss';

export default function ProductCard({ name, price_in_cents, image_url }: Product) {
  const imageUrl = image_url || '/fallback.jpg';
  const formattedPrice = `R$ ${(price_in_cents / 100).toFixed(2).replace('.', ',')}`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.image_url}
          width={256}
          height={300}
        />
      </div>
      <div className={styles.info}>
        <p>{name}</p>
        <strong>{formattedPrice}</strong>
      </div>
    </div>
  );
}
