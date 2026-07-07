const http = require("http");
const { url } = require("inspector");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<a style="color: blue;" href="/home">home</a><br/>');
    res.write('<a style="color: blue;" href="/men">men</a><br/>');
    res.write('<a style="color: blue;" href="/women">women</a><br/>');
    res.write('<a style="color: blue;" href="/kid">kid</a><br/>');
    res.write('<a style="color: blue;" href="/cart">cart</a><br/>');
  } else if (req.url === "/home") {
    res.write("<h1>home</h1>");
  } else if (req.url === "/men") {
    res.write("<h1>men</h1>");
  } else if (req.url === "/women") {
    res.write("<h1>women</h1>");
  } else if (req.url === "/kid") {
    res.write("<h1>kid</h1>");
  } else if (req.url === "/cart") {
    res.write("<h1>cart</h1>");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
