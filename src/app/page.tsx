"use client";

import { AppHeader } from "@/components/AppHeader";
import NavMenu from "@/components/NavMenu";
import Pagination from "@/components/Pagination/Pagination";
import ProductGrid from "@/components/ProductGrid";;
import { fetchProducts } from "@/services/productsService";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12); // número de produtos por página
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((res) => setAllProducts(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  // Calcular produtos da página atual
  const totalPages = Math.ceil(allProducts.length / perPage);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentProducts = allProducts.slice(start, end);

  return (
    <>
      <AppHeader />
      <main className={styles.background}>
        <NavMenu />
        <ProductGrid products={currentProducts} />
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
}
