import Image from 'next/image';
import styles from './ProductCard.module.scss';

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

export default function ProductCard({ name, price, image }: Product) {
  const imageUrl = image || '/fallback.jpg'; // fallback se não tiver imagem

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={name}
          width={256}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <p>{name}</p>
        <strong>R$ {price.toFixed(2)}</strong>
      </div>
    </div>
  );
}
