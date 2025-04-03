//add remove lisners write node js script to create 2 listner for common event call there respecting with proper msg print number of event assosiated with emiiter remove 1 os the listner and print number of remain listner
var e=require('events')
var ee=new e.EventEmitter()
var l1=function l1(){console.log("listner 1 is executed !")}
var l2=function l2(){console.log("listner 2 is executed !")}
ee.addListener("conn",l1)
ee.addListener("conn",l2)
var count=ee.listenerCount("conn")
console.log(count + "for conn Event")
ee.emit("conn")
ee.removeListener("conn",l1)
var count=ee.listenerCount("conn")
console.log(count + "for conn Event")
ee.emit("conn")