// console.log("Hello in Typescript");

// let num : number = 34;
// let num2 = 23;
// console.log(`num = `,num);
// console.log(`num2 = `,num2);

var num3:any; //Any type typescript

// num3="Aman";
num3=45;

// console.log(typeof(num3)); //typeof in typescript


// function checkErr(age:number):never{

//         if(age>=18)
//         console.log("u r ready to vote");
//         else
//         throw new Error("not ready to vote");
// }

// function checkVote()
// {
//     let age=12;
//     checkErr(age);
    
// }
// checkVote();


var num5:never; //Never type Typescript

var num8: string|number;

// num8="Aman"
num8=78
console.log(num8);

var studata:[number,string,number];

// studata=[67,"aman",678];
// studata=["hiii","aman",678];

// console.log(studata);

type rollandname =number|string;

var st1:rollandname;

st1="hiii"
st1=89;




Vishal, 4:56 PM

//Function in typescript By User Define -They are Four

// console.log(Math.pow(2,6));  //Math function in typescript

// function greet()
// {
//     console.log("no argument no return type");
       
// }

// greet();

// function greet2()
// function greet2():string
// {
//     return "no argument with return type";
//     // return 55;  
// }

// console.log(greet2());

// function greet2(msg)
// function greet2(msg:string)
// {
//     console.log("hello "+msg);
// }

// greet2("Aman");
// greet2(55);

// function greet(msg)
// // function greet(msg:string):string
// {
//     return "hello "+msg;
// }
// console.log(greet("AMan"));

// function add(n1,n2) 
// function add(n1:number,n2?:number) 
// function add(n1:number,n2?:number,n3:number) //error
// function add(n1:number,n3:number,n2?:number) 
// {
//     if(n2 == undefined)
//     return n1;
//     else if(n3 != undefined)
//     return n1+n2+n3;
//     else
//     return n1+n2;
// }
// function add(n1:number,n2:number,n3:number=56) 
// {
//     return n1+n2+n3;
// }
// console.log(add(10,20));
// console.log(add(10,20,30));


// function add(n1:number,n2:number,narr:number[]) 
// {
//     let sum:number=0;
//     for (const e of narr) {
//         sum=sum+e;
//     }
//     return n1+n2+sum;
// }

// console.log(add(10,20,[30,40,50]));

// function add(n1:number,n2:number,...narr:number[]) 
// function add(n1:number,n2:number,...narr:number[],n6:number)//error
// {
//     let sum:number=0;
//     for (const e of narr) {
//         sum=sum+e;
//     }
//     return n1+n2+sum;
// }

// console.log(add(10,20,30,40,50));

//error
// function add(n1:number):number     // By Doing Rest Parameter 
// {
//     return n1;
// }
// function add(n1:number,n2:number):number
// {
//     return n1+n2;
// }

//best way
function add(a:string, b:string):string;
function add(a:number, b:number): number;
function add(a: any, b:any): any 
{//same body for 3 functions
    
    return a + b;
}

console.log(add("Hello ", "Aman")); // returns "Hello Steve" 
console.log(add(10, 20)); // returns 30 
// console.log(add(10,"Hello"));//error