class Employee 
{
    private static headcount: number = 0;

    constructor
    (
        private firstName: string,
        private lastName: string,
        private jobTitle: string) 
    {

        Employee.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}

let john = new Employee('Vishal', 'D', 'Pa');
let jane = new Employee('Aman', 'V', 'Sa');

console.log(Employee.getHeadcount); 
