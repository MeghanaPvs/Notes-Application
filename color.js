const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('pvs@example.com'));
console.log(validator.isEmail('gmail.com'));
console.log(validator.isURL('https://www.w3schools.com/nodejs/nodejs_url.asp'));


//Chalk

console.log(chalk.green("Success"));
console.log(chalk.bold('bold'));
console.log(chalk.red.bold('Error'));
const colormsg=chalk.cyan('hello');
console.log('colormsg')

console.log(chalk.blue.bgRed.bold('hi')) //bg red and txt blue
console.log(chalk.inverse.blue('inveresed'))
console.log(chalk.inverse.bold.yellow('inveresed')) //bold inverse yellow color