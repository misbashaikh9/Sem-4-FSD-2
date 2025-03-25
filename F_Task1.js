//Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5
// elements on Node Js server.
fs=require('fs')
fs.writeFileSync('F_Task1.txt','10 34 32 76 3')
data=fs.readFileSync('F_Task1.txt','utf-8')
data=data.split(" ")
d=data.sort((a,b)=>a-b) //to handle multidigit and value
for(i=0;i<data.length;i++)
{
    data[i]=parseInt(data[i])
}
console.log(data)
