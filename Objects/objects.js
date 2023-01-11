// Creating objects using object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw() {
        console.log('draw');
    }
};
// Creating objects using Factory pattern
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };  
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);

// Creating objects using constructor pattern
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function() { 
            console.log('draw');
        }
    }
}

const circle3 = new Circle(3);

// Private properties and methods
// In the below example: computeOptimumLocation is a private method
// and defaultLocation is a private property
class AnotherCircle {
    constructor(radius) {
        this.radius = radius;
        let defaultLocation = {x: 0, y: 0};
        function computeOptimumLocation(factor) {
                //...
        }
        this.draw = function() {
            computeOptimumLocation(0.1);
            console.log('draw another circle with optimum location');
        };
    }
}

const circle4  = new AnotherCircle(4);
circle4.draw();

class AnotherCircle1 {
    constructor(radius) {
        this.radius = radius;
        let defaultLocation = {x: 0, y: 0};

        function computeOptimumLocation(factor) {
                //...
        }
        this.draw = function() {
            computeOptimumLocation(0.1);
            console.log('draw another circle with optimum location');
        };
        // how to define getters and setters
        Object.defineProperty(this, 'defaultLocation', {
            get: function() {
                return defaultLocation;
            },
            set: function(value) {
                if (!value.x || !value.y)
                    throw new Error('Invalid Location');
                defaultLocation = value;
            }
        })
    }
}

const circle5  = new AnotherCircle1(5);
circle5.draw();
console.log(circle5.defaultLocation);

circle5.defaultLocation = 1;  // should throw exception 'Invalid Location'


