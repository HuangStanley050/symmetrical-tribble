import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers: {
    Query
  }
});
export default server;
