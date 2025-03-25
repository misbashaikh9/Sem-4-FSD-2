
fs=require('fs')
fs.writeFile('Data.txt','Entered',(e)=>
    {   
        if(e)
        {
            console.log(e)
        }
        else{
            console.log('Write Successfully done!')
       
        fs.appendFile('Data.txt','hello',(e)=>
        {
            if(e)
            {
                console.log(e)
            }
            else
            {
                console.log('append Done!')
          
                fs.readFile('Data.txt','utf-8',(e,data)=>
                {
                    if(e)
                    {
                        console.log(e)
                    }
                    else{
                        console.log(data)
                        console.log('Complete read!')
                    }
                })
            }
        })
    }
})
console.log('programme ended!')