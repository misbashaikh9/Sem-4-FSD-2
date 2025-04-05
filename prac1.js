// Write a file having five numbers in array form separated by white space in .txt file.
//Append sorted array of these 5 numbers in same file along with message: “Sorted array:” in new line.
//Find maximum number from that and append with message “maximum number=” in same file. (your code should compatible for any random numbers including sign)
fs=require("fs")
var numbers=[3,6,8,10,1]
fs.writeFileSync("file.txt",numbers.join(" "))
var data="\n Sorted array:\n"
data=data+numbers.sort(function(a,b){return a-b}).join("\n")
fs.appendFile('file.txt', data, function (err)
{
    if(err) 
    {console.log(err) }
    else {console.log("programme ended")}
})
var data1="\n Maximum Number:"
max=data1+numbers.Max()
fs.appendFile('file.txt', data1, function (err)
{
    if(err) 
    {console.log(err) }
    else {console.log("programme ended")}
})