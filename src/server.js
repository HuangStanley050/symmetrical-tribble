import server from "./app";
import path from "path";
const port = process.env.PORT || 8000;
const opts = {
  port: port,
  endpoint: "/api/graphql",
  playground: "/playground"
};
server.express.get("*", (req, res, next) => {
  if (req.url === opts.playground || req.url === opts.endpoint) {
    // Return next() so that the GraphQLServer will handle it
    return next();
  }
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

server.start(opts, () =>
  console.log(`Server is running on localhost: ${port}`)
);
