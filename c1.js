var u=require("url");
var addr="https://video.google.com:80/view/movie/english?name=avanger&year=2022#info";
var q1=u.parse(addr,true);
// console.log(q1);
console.log(q1.query)
