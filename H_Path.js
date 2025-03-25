p=require('path')
fs=require('fs')
a=p.dirname('D:/B3_FSD/Hello.txt')
console.log(a)
b=p.extname('D:/B3_FSD/Hello.txt')
console.log(b)
c=p.basename('D:/B3_FSD/Hello.txt')
console.log(c)
d=p.parse('D:/B3_FSD/Hello.txt')
console.log(d)
a=d.ext
if(a=='.txt')
{
    fs.writeFileSync('H_path.txt',"You're are Working On TXT File!")
    // console.log("You're are Working On TXT File!")
}
else
{ 
    fs.writeFileSync('H_path.txt',"You're Not are Working On TXT File!")
    //console.log("You're Not are Working On TXT File!")
}