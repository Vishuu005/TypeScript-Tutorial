
// Interface And Object as A Function implements in a Function

interface IPerson
{
    firstName:string,

    lastName:string,
    sayHii: () =>string
}

var customer : IPerson = 
{

    firstName : "Vishal",
    lastName : "Pandey",
    sayHii : () : string => {return "..........Welcome to MY Page......"}

}

console.log("Customer object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHii());


var employee : IPerson = 
{

    firstName : "Abahs",
    lastName : "Pandey",
    sayHii : () : string => { return "********Hello Vishal This is My Programme******"}
}


console.log("Employee Object");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHii());
