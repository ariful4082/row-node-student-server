const fs = require("fs");

exports.readFile = () => {
  const row = fs.readFile("./data/db.js");
  const students = JSON.parse(row);

  return students;
};

exports.writeFile = (data) => {
  const obj = JSON.stringify(data);
  fs.writeFile("./data/db.json", obj);
};
