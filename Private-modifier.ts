class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) 
  
  {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string 
  
  {
    return `${this.firstName} ${this.lastName}`;
  }
}



let person = new Person("153-07-3130", "Vishal", "Vishuu");
console.log(person.ssn); // compile error
