// Creating a function that extends an object with another using inheritance
// As per the JS Course (using Constructor Functions)

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(colour) {
    this.colour = colour;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, colour) {
    Shape.call(this, colour);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const circle = new Circle(1, 'red');
const square = new Square(10);