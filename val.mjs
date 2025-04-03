import val from 'validator'
let email="abc@gmail.com"
console.log(val.isEmail(email)) //true
console.log(val.isEmail('hello'))//false
console.log(val.isLowercase('lju'))//true
console.log(val.isEmpty('')) //true
console.log(val.isEmpty('hii')) //false
