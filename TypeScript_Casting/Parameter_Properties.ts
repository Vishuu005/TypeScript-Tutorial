
// Parameter Properties
// TypeScript provides a convenient way to define class members 
// in the constructor, by adding a visibility modifiers to the parameter.




class Person 
{
    // name is a private member variable
    public constructor(private name: string) {}
  
    public getName(): string 
    {
      return this.name;
    }
  }
  
  const person = new Person("Hello.....Vishal");
  console.log(person.getName());