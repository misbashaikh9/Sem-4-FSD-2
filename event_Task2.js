// Write a node js script to write the text “This is data” to new.txt file. After that append the text “that is data” to same ne .txt file. After that read the file and print file concept on console. After finishing read operation, print the line “Thanks for using my program” on console. All read/write operations are asynchronous.
var e=require('events')
var ee=new e.EventEmitter()
var fs=require("fs")
ee.on('write',()=>
    {fs.writeFile('new.txt','this is data',()=>{console.log("successfully write file!") 
        ee.emit('append')
    })})
e.on('append',()=>
{
    fs.appendFile('new.txt','\n that is data',()=>
    {
        console.log('append done!')
        ee.emit('read')
    })
})
e.on('read',()=>){
    fs.readFile('new.txt','utf8',()=>)
}
