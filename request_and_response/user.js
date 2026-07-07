
const fs = require("fs");

const handleRequest = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "input your name: <form action='/submit' method='post'> <input type='text' id='name'placeholder='name'/><br/>  <input type='radio' name='gender' value='male'>male <br/> <input type='radio' name  ='gender' value='female'>female<br/><button onclick='sendName()'>Submit</button> </form> ",
    );
  } else if (req.url === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    res.writeHead(302, { "Location": "/" });
  }
  res.end();
}



module.exports = handleRequest;