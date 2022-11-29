const fs = require('fs')
const parseCsv = require('./parseCsv')

try{
    fs.mkdirSync("./dist")
}catch(err){
    console.log("dist exist");
}


fs.copyFileSync("./index.html", './dist/index.html')
fs.copyFileSync("./convertor.html", './dist/convertor.html')
fs.copyFileSync("./random.svg", './dist/random.svg')
fs.copyFileSync("./vue.js", './dist/vue.js')

parseCsv().then(res => {
    fs.writeFileSync("./dist/index.js", `let list = ${JSON.stringify(res)}`, 'utf8')
})