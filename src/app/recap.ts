const unsername:string='jhimy';
let papas: string|number=5;

const sum=(a:number, b:number)=>
{
  return a+b;
}
sum(4,5);

// class Persona
// {
//   private age:number;
//   private lastName:string;

//   constructor(age:number,lastName:string)
//   {
//     this.age=age;
//     this.lastName=lastName;
//   }
// }

// const nico =new Persona(15,'Diestra');

class Persona
{
  constructor(private age:number,private lastName:string) {}
}

const nico =new Persona(15,'Diestra');
