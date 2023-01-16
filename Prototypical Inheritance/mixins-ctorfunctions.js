// Over-use of inheritance can make our code fragile, especially when we have
// multi-level inheritance hierachices, that can make our code complex as it grows
// It is best to use composition over inheritance whenever possible and to keep
// things simple.

// To achieve composition, all abilities of an object should be made into their own
// javascript objects and can then be combined differently for different objects.
// In C# & Java this concept is known as Interfaces
// In Javascript, we call it Mixins

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat() {
        console.log('eating');
    }
};

const canWalk = {
    walk() {
        console.log('walking');
    }
};

const canSwim = {
    swim() {
        console.log('swimming');
    }
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();

console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);
const goldFish = new Goldfish();

console.log(goldFish);
