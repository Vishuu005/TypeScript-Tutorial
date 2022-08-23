var Student = /** @class */ (function () {
    function Student(address, phone) {
        //  val num=67;
        // let num3=89;
        // let num:number=86;
        // var num5: number=86;
        this.id = 56;
        this.name1 = "Vishal";
        this.name = "Aman";
        if (address != undefined)
            this.address = address;
        if (phone != undefined)
            this.phone = phone;
    }
    Student.prototype.greet = function () {
        console.log("---------Welcome New World!!----------");
        return "hello" + this.name;
    };
    return Student;
}());
var s1 = new Student(102, 8400446340);
// console.log(   'id is  ${s1.id} and name is  ${s1.name1}'   );
// console.log(   'address is  ${s1.address} and phone is  ${s1.phone}'   );
console.log(s1.greet());
