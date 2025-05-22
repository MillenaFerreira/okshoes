import { Product } from "./Product";

export type NavMenuProps = {
  products: Product[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
};