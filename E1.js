function clk()
{
    const time=new Date().toLocaleTimeString({hours12:false})
    console.log(time)
}
clk()
setInterval(clk,1000)