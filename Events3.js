var e=require('events')
var ee=new e.EventEmitter()
ee.on('sayName',(code,msg)=>{
    console.log(`String is ${code} & page is ${msg}`)
})
ee.emit('sayName',200,"ok")