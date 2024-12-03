// Primero se importa ApolloServer y gql de la librería apollo-server
const { ApolloServer, gql } = require('apollo-server');

// Luego se define el esquema de GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Tercero se crea los resolvers que responden a las consultas
const resolvers = {
  Query: {
    hello: () => "Hello world from graphql, my name is Keyth Yaguana!"  // Esto es lo que se devuelve cuando se hace la consulta "hello"
  }
};

// Se crea el servidor Apollo y se le pasa los typeDefs y resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Finalmente, se hace que el servidor escuche en un puerto y muestre la URL
server.listen().then(({ url }) => {
  console.log(`🚀  Server listo en ${url}`);
});
