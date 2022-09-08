// Parameter Properties
// TypeScript provides a convenient way to define class members 
// in the constructor, by adding a visibility modifiers to the parameter.
var Person = /** @class */ (function () {
    // name is a private member variable
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Hello.....Vishal");
console.log(person.getName());
