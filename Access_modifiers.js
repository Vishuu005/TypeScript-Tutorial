// ***************All Access-Modifiers Code Present Here***************** 
// # Step : 1 Public 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Student 
// {  
//     public studid: number;  
//     studName: string;  
// }  
// let stud = new Student();  
// stud.studid = 101;  
// stud.studName = "Vishal"+ " Phone Number";  
// console.log(stud.studid+ " "+stud.studName);  
// ***************All Access-Modifiers Code Present Here***************** 
// # Step : 1 Private
// class Student 
// {  
//     public stud1: number;  
//     private studName: string;  
//     constructor(s1: number, name: string){  
//     this.stud1 = s1;  
//     this.studName = name;  
//     }  
//     public display() 
//     {  
//     return (`Code Access: ${this.stud1}, my name: ${this.studName}.`);  
//     }  
//     }  
//     let student: Student = new Student(1, "Saurabh");  
//     console.log(student.display());  
// ***************All Access-Modifiers Code Present Here***************** 
// # Step : 1 Protected
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    return Student;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(code, name, department) {
        var _this = _super.call(this, code, name) || this;
        _this.department = department;
        return _this;
    }
    Person.prototype.getElevatorPitch = function () {
        //  If you want to Run this code then, Make a new Function With given Anytype of Name And Return some value okkk.......
        // console.log(**********************Hello Access Modifiers************************);
        return ("My unique code:------------------- ".concat(this.studCode, ", -------------my name: ").concat(this.studName, "   -----------and I am in ").concat(this.department, " ------Branch."));
    };
    return Person;
}(Student));
var v1 = new Person(1, "v1", "CS");
console.log(v1.getElevatorPitch());
