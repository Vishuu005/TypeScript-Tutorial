class Student 
{
    private _name:string ="Vishal";
    private _semster:number;
    private _course:string;

    public get name()
    {
        return this._name;
    }
}


let student = new Student();

let value= Student.name;
console.log(value);
