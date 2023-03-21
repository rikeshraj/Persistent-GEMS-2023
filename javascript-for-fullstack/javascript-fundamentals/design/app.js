var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();

let name = input;

if(checkAge(Number(name))) {
    console.log("Allowed")
}
else {
    console.log("Not Allowed")
}
function checkAge(age) {
    if(age>=18)
        return true;
    return false;
}

