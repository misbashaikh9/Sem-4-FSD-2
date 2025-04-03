var e=require('events')
var ee=new e.EventEmitter()
ee.on("sayname",()=>
    {
        console.log('hello')
    })
ee.emit('sayname')