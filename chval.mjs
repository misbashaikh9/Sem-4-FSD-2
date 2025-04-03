import val from 'validator';
import ch from 'chalk';
var test=ch.red.underline('hello')+ch.bold.bgRed.italic.yellow("\n welcome")
console.log(test)
console.log(val.isLowercase(test))
console.log(val.isEmail(test))