import { GraphQLServer } from "graphql-yoga";
const port = process.env.PORT || 8000;
const opts = {
  port: port
};
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
export default server;
