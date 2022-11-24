const fs = require('fs')
const parseCsv = require('./parseCsv')

parseCsv().then(res=>{
    fs.writeFileSync("./index.js",`let list = ${JSON.stringify(res)}`,'utf8')
})