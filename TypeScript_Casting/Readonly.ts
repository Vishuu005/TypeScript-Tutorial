// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.




class Person 
{
    private readonly name: string;
  
    public constructor(name: string) 
    {
      // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string 
    {
      return this.name;
    }
  }
  
  const person = new Person("*************Welcome To My Youtube Channel CodewithVishal***************");
  console.log(person.getName());