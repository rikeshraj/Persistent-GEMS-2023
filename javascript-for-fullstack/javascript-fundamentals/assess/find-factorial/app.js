var fs=require('fs');
var input=fs.readFileSync('input.txt').toString().trim();

//Fill your code here

let val = Number(input);

let fact =(num)=> {
    let f=1;
    for(let  i=1; i<=num; i++) {
        f *= i;
    }
    return f;
}

console.log(fact(val));