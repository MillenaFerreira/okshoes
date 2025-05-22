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
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('');


  useEffect(() => {
    fetchProducts()
      .then((res) => setAllProducts(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  const sortProducts = (products: Product[], sort: string): Product[] => {
    switch (sort) {
      case 'high-price':
        return [...products].sort((a, b) => b.price_in_cents - a.price_in_cents);
      case 'low-price':
        return [...products].sort((a, b) => a.price_in_cents - b.price_in_cents);
      case 'most-sold':
        return [...products].sort((a, b) => b.sales - a.sales);
      case 'least-sold':
        return [...products].sort((a, b) => a.sales - b.sales);
      default:
        return products;
    }
  };


  const filteredProducts =
    category === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === category);

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  const totalPages = Math.ceil(sortedProducts.length / perPage);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentProducts = sortedProducts.slice(start, end);
  
  return (
    <>
      <AppHeader />
      <main className={styles.background}>
        <NavMenu
          products={allProducts}
          activeCategory={category}
          onCategoryChange={setCategory}
          onSortChange={setSortOption}
        />
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
