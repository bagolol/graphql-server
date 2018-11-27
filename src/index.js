const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { typeDefs, resolvers } from './typeDefs.js';


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
