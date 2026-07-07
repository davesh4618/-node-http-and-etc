const addition = (body, res) => {
  const parsedbody = Buffer.concat(body).toString();
  const takeoutrawdata = new URLSearchParams(parsedbody);
  const number1 = Number(takeoutrawdata.get("num1"));
  const number2 = Number(takeoutrawdata.get("num2"));
  const sum = number1 + number2;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>sum of ${number1} and ${number2} is ${sum}</h1>`);
  console.log(`sum of ${number1} and ${number2} is ${sum}`);
  res.end();
};

module.exports = addition;
