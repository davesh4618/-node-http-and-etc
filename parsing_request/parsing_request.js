const http = require("http");
const { url } = require("inspector");
const fs = require("fs");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "input your name: <form action='/submit' method='post'> <input type='text' name='name' placeholder='name'/><br/>  <input type='radio' name='gender' value='male'>male <br/> <input type='radio' name  ='gender' value='female'>female<br/><button onclick='sendName()'>Submit</button> </form> ",
    );
  } else if (req.url === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      console.log(parsedbody);
      const takeoutrawdata = new URLSearchParams(parsedbody);
      const jsondata = {};
      for ([Key, value] of takeoutrawdata.entries()) {
        jsondata[Key] = value;
      }
      console.log(jsondata);
      fs.writeFileSync("user.txt", JSON.stringify(jsondata));
    });
    res.writeHead(302, { Location: "/" });
  }

  res.end();
});

let port = 3000;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
