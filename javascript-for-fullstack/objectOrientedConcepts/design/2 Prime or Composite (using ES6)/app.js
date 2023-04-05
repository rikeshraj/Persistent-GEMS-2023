var fs = require('fs');
var data = fs.readFileSync('input.txt').toString().trim().split('\n');

var num = Number(data);

const Prime = require ("./display.js");

const p = new Prime(num);

p.isPrime();