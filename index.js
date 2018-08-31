var chalk = require("chalk");

var message = chalk.blue("Hello ") + chalk.yellow("World ") + chalk.redBright("Hey!");
var message2 = chalk.black.bgWhite.inverse("LOVE") + " " + chalk.bgRedBright("and") + " " + chalk.rgb(255, 136, 0).italic("PEACE!");
console.log(message);
console.log(message2);