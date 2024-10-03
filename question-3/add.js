const fs = require('fs')
const path = require('path')
var writeTo = './LogFiles';

const add = () => {

    if (!fs.existsSync(writeTo)){
       fs.mkdirSync(writeTo);
   }
   
   try {
       process.chdir(writeTo);    
   }
   catch (err) {
       console.log('Change dir error: ' + err);
   }

   let data = 'My text for each log file';
   for (let i = 0; i < 10; i++) {
       fs.writeFile(`log${i}.txt`, data+i, function(err){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}
add();