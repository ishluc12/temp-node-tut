const {readFile, writeFile}= require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
   const first= result;
   readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const second= result;
    writeFile('./content/result-sync.txt',  `here is the result: ${first}, ${second}`,
         (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with task')
        }
        
    )
   })
})

console.log('starting next task')

