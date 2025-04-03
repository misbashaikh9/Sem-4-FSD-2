//when connect event is fire and print msg connection successfully after connect endler hire another event has to tigger name data recived has evel to print data recevied successfully.
var e=require('events')
var ee=new e.EventEmitter()
var connecthandler = function connect()
{
    console.log("Connection Done!")
    ee.emit("data Received")
}
ee.on("connection",connecthandler)
ee.on("data Received",function(){console.log("data Received!!")})
ee.emit('connection')