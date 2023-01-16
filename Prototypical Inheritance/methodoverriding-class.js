// Method Overriding + Polymorphism
// Using classes instead of constructor functions 
// Classes are syntactic sugar over constructor functions

class Shape {
    constructor() {}

    duplicate() {
        console.log('duplicate a shape');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }

    // over-riding the duplicate method in circle object
    duplicate() {
        super.duplicate(); //also calling the base duplicate method
        console.log('duplicate a circle');
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }

    duplicate() {
        console.log('duplicate a square');
    }
}

const circle = new Circle(1, 'red');
const square = new Square(15);

const shapes = [
    new Circle(2),
    new Square(15)
];

for (let shape of shapes)
    shape.duplicate();