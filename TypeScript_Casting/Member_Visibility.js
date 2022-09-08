// Members: Visibility
// Class members also be given special modifiers which affect visibility.
// There are three main visibility modifiers in TypeScript.
// 1. public - (default) allows access to the class member from anywhere
// 2 .private - only allows access to the class member from within the class
// 3 .protected - allows access to the class member from itself and any classes that inherit it, which is covered 
// in the inheritance section below.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Vishal");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
