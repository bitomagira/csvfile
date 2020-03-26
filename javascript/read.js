const fs = require("fs");
const text = fs.readFileSync("./data.csv").toString();
const ligne = text.split("\r\n").toString();
const el = ligne.split(",")
for(let index=0;index<el.length;index++){
    const res = el[index].split(";");
    for(let i=0;i<res.length;i++){
        console.log(res[i])
    }
}
