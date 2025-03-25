os=require('os')
fs=require('fs')
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir()) //if need to run in run admin.. '%temp%'
console.log(os.freemem())
a=os.freemem()/1024/1024/1024
if(a>1)
{
    fs.writeFileSync('G_OS.txt','memory greater than 1 GB')
}
else
{
fs.writeFileSync('G_OS.txt','memory is less Than 1 GB')
}