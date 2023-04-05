var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

var c = input[0].split(",");
var s = input[1].split(",");
var t = input[2].split(",");

class Shape {
    constructor(name) {
        this.name = name;
    }
}
class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    displayCircleMeasurements() {
        const rad = this.radius;
        console.log("Perimeter of a Circle: " + (2*3.14*rad));
        console.log("Area of a Circle: " + (3.14*rad*rad));
    }
}
class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    displaySquareMeasurements() {
        const s = this.side;
        console.log("Perimeter of a Square: " + (s*4));
        console.log("Area of a Square: " + (s*s));
    }
}
class Triangle extends Shape {
    constructor(name, side1, side2, side3, base, height) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.base = base;
        this.height = height;
    }
    displayTriangleMeasurements() {
        const s1 = this.side1;
        const s2 = this.side2;
        const s3 = this.side3;
        const b = this.base;
        const h = this.height;
        console.log("Perimeter of a Triangle: " + (s1+s2+s3));
        console.log("Area of a Triangle: " + (0.5*b*h));
    }
}

var objCircle  = new Circle(String(c[0]), Number(c[1]));
var objSquare  = new Square(String(s[0]), Number(s[1]));
var objTriangle  = new Triangle(String(t[0]), Number(t[1]), Number(t[2]), Number(t[3]), Number(t[4]), Number(t[5]));

objCircle.displayCircleMeasurements();
objSquare.displaySquareMeasurements();
objTriangle.displayTriangleMeasurements();

