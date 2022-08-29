var Student = /** @class */ (function () {
    function Student() {
        this._name = "Vishal";
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var Student = new Student();
var value = Student.name;
console.log(value);
