// Prototypical Inheritance in Action
// Using classes instead of constructor functions 
// Classes are syntactic sugar over constructor functions
class Shape {
    constructor(colour) {
        this.colour = colour;
    }

    duplicate() {
        console.log('duplicate');
    }
}

class Circle extends Shape {
    constructor(radius, colour) {
        super(colour);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }
}

const circle = new Circle(1, 'red');
const square = new Square(10);