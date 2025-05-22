import { ProductGridProps } from "@/types/ProductGrid";
import ProductCard from "../ProductCard";
import styles from "./ProductGrid.module.scss";

export default function ProductGrid({ products }: ProductGridProps) {
  // Componente funcional que recebe as props já tipadas
  // Desestrutura a propriedade products do objeto de props
  
  return (
    <main className={styles.background}>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} /> // Passa todas as propriedades do produto
        ))}
      </div>
    </main>
  );
}
