var u=require("url");
var ps=require("fs");
var adr1=" http://localhost:8080/default.html?year=2025&month=feb";
var q1=u.parse(adr1,true);
var qdata=q1.query;
console.log(qdata);
ps.writeFile("fsd2.txt",JSON.stringify(qdata),(err)=>
{
console.log("completed");
});