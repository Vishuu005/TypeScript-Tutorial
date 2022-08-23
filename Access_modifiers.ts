// ***************All Access-Modifiers Code Present Here***************** 
// # Step : 1 Public 

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


class Student 
{  
    public studCode: number;  
    protected studName: string;  
    constructor(code: number, name: string)
    {  
        this.studCode = code;  
        this.studName = name;  
    }  
}  
class Person extends Student 
{  
    private department: string;  
  
    constructor(code: number, name: string, department: string) 
    {  
        super(code, name);  
        this.department = department;  
    }  
    public getElevatorPitch() 
    {  
        //  If you want to Run this code then, Make a new Function With given Anytype of Name And Return some value okkk.......
        // console.log(**********************Hello Access Modifiers************************);
        
        return (`My unique code:------------------- ${this.studCode}, -------------my name: ${this.studName}   -----------and I am in ${this.department} ------Branch.`);  
    }  
}  
let v1: Person = new Person(1, "v1", "CS");  
console.log(v1.getElevatorPitch());
     
