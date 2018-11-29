import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs, resolvers } from './typeDefs.js';
import cors from 'cors';


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());

server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
