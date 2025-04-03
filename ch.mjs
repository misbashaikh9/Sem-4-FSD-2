import ch from 'chalk';
console.log(ch.underline.blue.bgYellow('hello'))
console.log(ch.hex("#DEADED").bold('Gray!'))
console.log(ch.red("Hello",ch.underline.bgBlue("world")+"!"))
const error=ch.bold.red;
const warning=ch.hex('#FFA500');
console.log(error('colour for error msg'))
console.log(warning('colour for warning msg'))