var fs = require("fs");

var dd = require("./localData.json");
console.log(dd);
console.log(dd.person);

fs.readFile("./localData.json", "utf-8", (err, data) => {
  var data = JSON.parse(data);
  console.log(data);
});

fs.readdir("./", (err, data) => {
  console.log(data);
});

var love = {
  game: "football",
};
fs.writeFile("love.json", JSON.stringify(love), (err) => {
  console.log("writing to file finished", err);
});
