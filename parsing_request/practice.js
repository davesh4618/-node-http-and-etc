const http = require("http");
const { url } = require("inspector");
const addition = require("./additionfunction.js");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>welcome to calculator</h1>");
    res.write("<a href='/calculator'>link for calculator</a>");
  } else if (req.url === "/calculator") {
    res.write("<h1>calculator</h1>");
    res.write(
      "<form action='/calculator-result' method='post'> <input type='text' name='num1' placeholder='number1'/><br/>  <input type='text' name='num2' placeholder='number2'/><br/><button type='submit' onclick='sendName()'>sum</button> </form> ",
    );
  } else if (req.url === "/calculator-result" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      addition(body, res);
    });
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
