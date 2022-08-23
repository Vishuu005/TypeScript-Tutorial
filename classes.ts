class Student {
    
    //  val num=67;
    // let num3=89;
    // let num:number=86;
    // var num5: number=86;
     id : number = 56;
     name1 = "Vishal";
     name = "Aman";
    //  let num4 : number= 67;
    //  let num5 : number=86;
    address;
    phone : number;


    constructor(address?:number,phone?:number)
    {
        if(address!= undefined)
        this.address=address;

        if(phone!=undefined)
        this.phone=phone;
    }


    greet()
    {
        console.log("---------Welcome New World!!----------");
        
        return "hello"+this.name;
    }
   
}





let s1 = new Student(102,8400446340);
// console.log(   'id is  ${s1.id} and name is  ${s1.name1}'   );
// console.log(   'address is  ${s1.address} and phone is  ${s1.phone}'   );
console.log(s1.greet());

