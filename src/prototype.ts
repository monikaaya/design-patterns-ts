// class inheritance

class Animal {}

class Dog extends Animal {}
class Cat extends Animal {}

// In prototype pattern, instead of inheriting from a class,
// the functionality comes from an already created object

const zombie = {
    eatBrains() {
        return "yum 🧠"
    }
}

const chad = Object.create(zombie, { name: { value: "chad" } });

console.log(chad);
// lookup the property on prototypal chain
console.log(chad.eatBrains())

// accessing prototype
console.log(Object.getPrototypeOf(chad))
// not best practice 🛑
console.log(chad.__proto__)

// prototype in the case of a javascript class refers to its constructor
// Array.prototype.bad = function() {
//     console.log("I'm bad")
// }
// [].bad()