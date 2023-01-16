function Circle() {
    this.draw = function() {
        // 'this' here references the Circle object that will be created
        // by this constructor function 
        console.log(this); 
    }
}

const c = new Circle();
c.draw(); // 'references the circle object

const drawCircle = c.draw;
drawCircle(); // here 'this' references the window object. 

// We want to avoid referencing the window or global object so we can
// write our code in strict mode. See below. 

function Triangle() {
    this.draw = function() {
        console.log(this); // references the Triangle object
    }
}

const t = new Triangle();
t.draw();

const drawTriangle = t.draw;
drawTriangle(); // now its going to return undefined (in strict mode)


// In ES6 using classes, we dont need to worry about enabling strict mode
// it is automatically enabled and will return undefined if this 
// tries to reference global object

class Square {
    draw() {
        console.log(this); // references square object
    }
}

const s = new Square();
s.draw(); // references square object

const drawSquare = s.draw;
drawSquare(); // returns undefined as part of ES6