var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code

let val = input;

function isPalindrome(str){
    str = str.toLowerCase();
    str = str.replace(/ /g, "");
    str = str.replace("\n", "");
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 0;
        }
    }
    return 1;
}

let a = isPalindrome(val);

if(a==1) {
    console.log(val + " is a palindrome");
}
else {
    console.log(val + " is not a palindrome");
}