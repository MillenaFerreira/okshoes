"use client";

import { AppHeader } from "@/components/AppHeader";
import NavMenu from "@/components/NavMenu";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";



export default function Home() {
  return (
    <>
      <AppHeader />
      <NavMenu />
      <ProductGrid products={products} />
    </>
  );
}
