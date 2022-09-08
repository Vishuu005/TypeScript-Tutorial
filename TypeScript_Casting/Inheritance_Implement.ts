// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.




interface Shape 
{
    getArea: () => number;
  }
  
  class Rectangle implements Shape 
  {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number 
    {
      return this.width * this.height;
    }
  }


  const myRect = new Rectangle(10,20);

console.log(myRect.getArea());