// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.
var Person = /** @class */ (function () {
    function Person(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("*************Welcome To My Youtube Channel CodewithVishal***************");
console.log(person.getName());
