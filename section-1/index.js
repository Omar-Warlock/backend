// file system module
const fs = require("fs");

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
