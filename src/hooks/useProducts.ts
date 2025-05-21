import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/queries/getProducts';
import { Product } from '@/types/Product';

// Define e exporta o useProducts que recebe parâmetros para paginação: skip = quantos produtos pular, first = quantos produtos buscar
export function useProducts(skip: number, first: number) {
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: { skip, first },
  });

  return {
    products: data?.allProducts as Product[] || [], // Retorna os produtos da resposta convertidos para Product[]
    totalCount: data?._allProductsMeta?.count || 0, // Retorna o total de produtos disponível
    loading, // Indica se a consulta ainda está carregando
    error, // Erro da consulta, se existir
    refetch, // Função para atualizar manualmente os dados da consulta
  };
}
