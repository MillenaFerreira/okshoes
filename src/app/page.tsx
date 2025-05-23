"use client";

import { AppHeader } from "@/components/AppHeader";
import NavMenu from "@/components/NavMenu";
import Pagination from "@/components/Pagination";
import ProductGrid from "@/components/ProductGrid";;
import { fetchProducts } from "@/services/productsService";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Loading } from "@/components/Loading";
import { BsFillBoxSeamFill } from "react-icons/bs";

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12); // número de produtos por página
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetchProducts()
      .then((res) => setAllProducts(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />

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

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const filteredProducts = searchTerm.trim()
    ? allProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : allProducts.filter((p) =>
      category === 'all' ? true : p.category === category
    );

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  const totalPages = Math.ceil(sortedProducts.length / perPage);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentProducts = sortedProducts.slice(start, end);

  return (
    <>
      <AppHeader onSearchChange={handleSearchChange} />
      <main className={styles.background}>
        <section className={styles.sectionProducts}>
          <NavMenu
            products={allProducts}
            activeCategory={category}
            onCategoryChange={setCategory}
            onSortChange={setSortOption}
          />

          {filteredProducts.length === 0 && searchTerm.trim() ? (
            <div className={styles.notFoundBox}>
              <BsFillBoxSeamFill size={100} />
              <p>Nenhum produto encontrado.</p>
            </div>
          ) : (
            <ProductGrid products={currentProducts} />
          )}

          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      </main>
    </>
  );
}
