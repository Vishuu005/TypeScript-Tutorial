// Inheritance: Extends
// Classes can extend each other through the extends keyword. A class can only extends one other class.


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
        
  class Square extends Rectangle 
  {
    public constructor(width: number) 
    {
      super(width, width);
    }
    // getArea gets inherited from Rectangle
  }
  
  const mySq = new Square(20);
  
  console.log(mySq.getArea());