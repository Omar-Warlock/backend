// file system module
const fs = require("fs");
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
