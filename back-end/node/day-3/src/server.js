import http from "http";
import { stringify } from "querystring";

// HTTP status code
// Comunicação, se deu certo ou errado, e por qual motivo

const users = [];
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if ((method === "GET", url === "/users")) {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if ((method === "POST", url === "/users")) {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
    });

    return res.writeHead(201).end();
  } 

  return res.writeHead(404).end("Not Found!");
});

server.listen(3333);
