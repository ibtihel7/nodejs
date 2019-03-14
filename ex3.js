let fs=require('fs');
let filePath=process.argv[2];
let buff=fs.readFileSync(filePath);
let stream=buff.toString();
let array=stream.split('\n');
let l=(array.length)-1;
console.log(l)