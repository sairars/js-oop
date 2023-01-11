let x = {};
console.log(Object.getPrototypeOf(x));

let y = {};
console.log(Object.getPrototypeOf(y));

// The same object is a prototype(parent) for both objects x and y
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // returns true

// The circle object has a prototype (circleBase) and the circleBase has
// a prototype (objectBase or root prototype).
// the constructor for circle will attach each circle object to the same circleBase
// prototype
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

const circle = new Circle(1);

// Setting attributes for properties in an object
const person = {
  name: 'Saira'
};

// By default all of the below attributes of properties are set to true.
Object.defineProperty(person, 'name', {
  configurable: false, // we cannot delete name property from person
  writable: false, // this makes name property a readonly field
  enumerable: false, // this means we cannot iterate overit in loops
});

// Instance methods/properties vs Prototype methods/properties
class NewCircle {
  constructor(radius) {
    // Instance members
    this.radius = radius;
    this.move = function () {
      console.log('move');
      this.draw();
    };
  }
}

// any methods that are common can be declared in the prototype and will be called
// prototype methods

// Prototype methods can be accessible from instance methods and vice-versa
// see how we access draw() from move() method

const newCircle = new NewCircle(1);

// Prototype members
NewCircle.prototype.draw = function() {
  console.log('draw a circle with radius: ', this.radius);
};

newCircle.draw();

// Instance members are also known as Own Members

// Returns (Own (Instance)) Members
console.log(Object.keys(newCircle));

// Returns (Own + Prototype Members)
for (let key in newCircle) console.log(key);

// checking if a member is Own or Prototype
console.log('is draw own property? ', newCircle.hasOwnProperty('draw')); // false
console.log('is move own property? ', newCircle.hasOwnProperty('move')); //true
