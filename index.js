const Tesseract=require('tesseract.js')
const path = require("path");
const options = {
    langPath: path.join(__dirname,'langs') // Or wherever your downloaded langs are stored
};
let imagePath= path.join(__dirname,"1.jpg");
console.log(imagePath,__dirname);
 Tesseract.create(options);
 Tesseract.recognize(imagePath, {lang: "eng"}) 
.progress(msg => console.log(msg))
.then(result => console.log(result))
.catch(err => console.log(err))