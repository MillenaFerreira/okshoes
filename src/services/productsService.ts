import client from "@/api/graphqlClient";
import { GET_PRODUCTS } from "@/queries/getProducts";

export async function fetchProducts() {
  // Faz uma requisição GraphQL, o GET_PRODUCTS será enviada para buscar os produtos
  const { data } = await client.query({ query: GET_PRODUCTS });

  return data.allProducts;
}