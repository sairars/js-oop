// Prototypical Inheritance in Action
 
// As per the JS Course (using Constructor Functions)
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

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function() {
    console.log('draw');
}

const circle = new Circle(1, 'red');
