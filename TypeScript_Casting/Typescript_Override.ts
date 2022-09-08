// Override
// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.



interface Shape 
{
    getArea: () => number;
  }
  
  class Rectangle implements Shape 
  {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number 
    {
      return this.width * this.height;
    }
  
    public toString(): string 
    {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square extends Rectangle 
  {
    public constructor(width: number) 
    {
      super(width, width);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string 
    {
      return `Square[width=${this.width}]`;
    }
  }
  
  const mySq = new Square(20);
  
  console.log(mySq.toString());