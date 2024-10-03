const fs = require('fs')
const path = require('path')
var writeTo = './LogFiles';

const remove = () => {
    if (!fs.existsSync(writeTo)){
        console.log('No such directory!');
        return;
    }

   fs.readdir(writeTo, (err, files) => {
        if(files.length == 0){
        console.log('No files in this folder')
        return;
        }

       if (err) throw err;

       for (let file of files) {

            if(files.length == 0){
            console.log('No files in this folder')
            break;
            }
           fs.unlink(path.join(writeTo, file), err => {
            if (err) throw err;
           console.log(`deleting files...${file}`)
       })
       }

       fs.rmdirSync(writeTo);
   })
}
remove();