import { Product } from '@/types/Product';
import styles from './ProductCard.module.scss';

export default function ProductCard({ name, price_in_cents, image_url }: Product) {
  const imageUrl = image_url || '/fallback.jpg';
  const formattedPrice = `R$ ${(price_in_cents / 100).toFixed(2).replace('.', ',')}`;

  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={name}
        className={styles.image}
      />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <strong className={styles.price}>{formattedPrice}</strong>
      </div>
    </div>
  );
}
