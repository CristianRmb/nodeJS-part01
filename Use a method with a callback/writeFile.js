const { writeFile } = require("node:fs");

writeFile("message.txt", "data.....", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

/*
Create a script that uses the Node.js core fs.writeFile() (callback API)
method to write a text file.
The documentation for this method is on the "Node.js File system page".
 */
