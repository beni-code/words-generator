const fs = require('fs')
const parseCsv = require('./parseCsv')

fs.copyFileSync("./index.html",'./dist/index.html')
fs.copyFileSync("./vue.js",'./dist/vue.js')

parseCsv().then(res=>{
    fs.writeFileSync("./dist/index.js",`let list = ${JSON.stringify(res)}`,'utf8')
})