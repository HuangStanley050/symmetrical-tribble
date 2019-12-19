import "core-js/stable";
import "regenerator-runtime/runtime";
import { GraphQLServer, express } from "graphql-yoga";
import path from "path";
import Query from "./resolvers/Query";

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers: {
    Query
  }
});

export default server;
