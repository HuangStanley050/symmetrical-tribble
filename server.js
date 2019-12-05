import server from "./app";
import path from "path";
const port = process.env.PORT || 8000;
const opts = {
  port: port,
  endpoint: "/api/graphql"
};
server.express.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

server.start(opts, () =>
  console.log(`Server is running on localhost: ${port}`)
);
