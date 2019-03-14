let l=process.argv.length;
let s=0;
for (let i=2;i<l; i++){
let str =process.argv[i];
let n= Number(str);
s=s+n};
console.log(s);