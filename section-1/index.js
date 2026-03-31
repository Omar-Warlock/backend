// file system module
const fs = require("fs");
const http = require("http");
const url = require("url");

///////////////////////////////////////
///////////////////////////////////////
// FILES
// Blocking Synchronous way
/* 
// read a file
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);
// write a file
const textOut = `this what you know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

// use node command
// const hello = "Hello World";
// console.log(hello);

*/

/*
// Non-blocking async way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) {
    console.log(err.message);
    return;
  }
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log("\n" + data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has ben written 😁");
      });
    });
  });
});
// callback hell
console.log("Reading data...");


 */
///////////////////////////////////////
///////////////////////////////////////
// SERVERS

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("<h1 >Home page</h1>");
  } else if (pathName === "/products") {
    res.end("this is the products");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1 style=`color-red`>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server runs ... \nListening to requests on port 8000");
});
