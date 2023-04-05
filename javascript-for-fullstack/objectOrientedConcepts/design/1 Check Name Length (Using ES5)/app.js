var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

let name = String(input);

function User(username) {
    this.username = username;
    this.getUsername = function() {
        return this.username;
    }
    this.checkNameLength = function() {
        len = username.length;
        if(len>4) {
            console.log(username);
        }
        else {
            console.log("Name is too short");
        }
    }
}

let obj = new User(name);
obj.checkNameLength();