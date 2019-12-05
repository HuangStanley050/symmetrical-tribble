import server from "./app";
const port = process.env.PORT || 8000;
const opts = {
  port: port,
  endpoint: "/api/graphql"
};
server.start(opts, () =>
  console.log(`Server is running on localhost: ${port}`)
);
