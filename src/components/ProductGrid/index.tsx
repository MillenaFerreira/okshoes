import ProductCard from '../ProductCard';
import styles from './ProductGrid.module.scss';

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <main className={styles.backgroud}>
      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
      
    </main>
  );
}
