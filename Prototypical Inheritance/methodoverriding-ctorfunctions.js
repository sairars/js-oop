// Method Overriding + Polymorphism
// As per the JS Course (using Constructor Functions)

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate a shape');
}

function Circle(radius) {
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

// over-riding the duplicate method in circle object
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate(); //also calling the base duplicate method
    console.log('duplicate a circle');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

// over-riding duplicate method in square object
Square.prototype.duplicate = function() {
    console.log('duplicate a square');
}

const circle = new Circle(1);
const square = new Square(10);

const shapes = [ 
    new Circle(1), 
    new Square(15)
];

for (let shape of shapes) 
    shape.duplicate();