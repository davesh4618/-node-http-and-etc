const http = require("http");
const { url } = require("inspector");
const requesthandler = require("./user.js");

const server = http.createServer(requesthandler);

let port = 3000;

server.listen(port, () => {
  console.log(`server is listening on the port ${port}`);
});
