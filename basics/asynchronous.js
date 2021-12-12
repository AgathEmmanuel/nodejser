fs = require("fs");

function getData(err, data) {
  console.log("datas are", data);
}

fs.readdir("./", getData);

console.log("The end");
