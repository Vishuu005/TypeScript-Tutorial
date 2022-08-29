abstract class Person 
{
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employee extends Person 
{ 
    name: string;
    empCode: number;
    
    constructor(name: string, code: number) 
    { 
        super(); // must call super()
        
        this.empCode = code;
        this.name = name;
    }
}

let emp: Person = new Employee("Vishal", 100);
emp.display(); 