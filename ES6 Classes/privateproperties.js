// Using weakmaps, we have one way to define private methods
// and properties inside a class to achieve abstraction.

const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
    constructor(radius) {
        //private property
        _radius.set(this, radius);

        // private method
        _move.set(this, () => console.log('move', this));
    }

    draw() {
        _move.get(this)();
        console.log('draw');
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0)
            throw new Error('Invalid radius');

        _radius.set(this, value);
    }
}

const circle = new Circle(1);
