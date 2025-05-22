import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // Endereço da API GraphQL
  cache: new InMemoryCache(),           // Cache em memória padrão do Apollo
});

export default graphqlClient;
