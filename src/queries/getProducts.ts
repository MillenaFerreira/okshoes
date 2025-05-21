import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      description
      price_in_cents
      image_url
      category
      sales
      created_at
    }
  }
`;
