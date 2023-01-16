class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance method
    draw() {
        console.log('draw');
    }

    // Static Methods (used when we need some utility methods on the class)
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{"radius": 100}');