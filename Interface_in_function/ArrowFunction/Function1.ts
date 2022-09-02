// Make Arrow Function 

interface IEmployee 
{
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string; 
}

// console.log(getManagerName("empCode"+"empName"+"getSalary"));
