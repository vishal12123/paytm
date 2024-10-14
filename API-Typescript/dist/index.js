"use strict";
// interface User{
//   name:string,
//   age:number
// }
// function sumOfAge(user1:User, user2:User){
//   return user1.age + user2.age;
// }
// const age = sumOfAge({name:"Vishal",age:20},{name:"Jira",age:30});
// console.log(age);
// interface User{
//   id:string,
//   name:string,
//   age:number,
//   email:string,
//   password:string
// }
// type UserProfile = Pick<User,"name" | "age" |'email'>
// const displayUserProfile = (user:UserProfile) =>{
//   console.log(`Name: ${user.name} , Email: ${user.email}`);
// }
// let myFavoritePet: "dog";
// myFavoritePet = "dog";
// console.log(myFavoritePet);
// type Species = "cat" | "dog" | "bird";
// interface Pet {
//  species: Species;
//  name: string;
//  eat():void;
//  walk():void;
//  sleep():void;
// }
// interface Cat extends Pet {
//  species: "cat";
// }
// interface Dog extends Pet {
//  species: "dog";
// }
// interface Bird extends Pet {
//  species: "bird";
//  sing():void;
// }
// function buyPet(pet: Species, name: string) : Pet;
// function buyPet(pet: "cat", name: string): Cat;
// function buyPet(pet: "dog", name: string): Dog;
// function buyPet(pet: "bird", name: string): Bird;
// function buyPet(pet: Species, name: string) : Pet {
//  if(pet === "cat") {
//   return {
//  species: "cat",
//  name: name,
//  eat: function () {
//  console.log(`${this.name} eats.`);
//  }, walk: function () {
//  console.log(`${this.name} walks.`);
//  }, sleep: function () {
//  console.log(`${this.name} sleeps.`);
//  }
//  } as Cat;
//  } else if(pet === "dog") {
//  return {
//  species: "dog",
//  name: name,
//  eat: function () {
//  console.log(`${this.name} eats.`);
//  }, walk: function () {
//  console.log(`${this.name} walks.`);
//  }, sleep: function () {
//  console.log(`${this.name} sleeps.`);
//  }
//  } as Dog;
//  } else if(pet === "bird") {
//  return {
//  species: "bird",
//  name: name,
//  eat: function () {
//  console.log(`${this.name} eats.`);
//  }, walk: function () {
//  console.log(`${this.name} walks.`);
//  }, sleep: function () {
//  console.log(`${this.name} sleeps.`);
//  }, sing: function () {
//  console.log(`${this.name} sings.`);
//  }
//  } as Bird;
//  } else {
//  throw `Sorry we do not have a ${pet}. Would you like to buy a dog?`;
//  }
// }
// function petIsCat(pet: Pet): pet is Cat {
//  return pet.species === "cat";
// }
// function petIsDog(pet: Pet): pet is Dog {
//  return pet.species === "dog";
// }
// function petIsBird(pet: Pet): pet is Bird {
//  return pet.species === "bird";
// }
// function playWithPet(pet: Pet) {
//  console.log(`Hey ${pet.name}, lets play.`);
//  if(petIsCat(pet)) {
//  // pet is now from type Cat (pet: Cat)
//  pet.eat();
//  pet.sleep();
//  } else if(petIsDog(pet)) {
//  // pet is now from type Dog (pet: Dog)
//  pet.eat();
//  pet.walk();
//  pet.sleep();
//  } else if(petIsBird(pet)) {
//  // pet is now from type Bird (pet: Bird)
//  pet.eat();
//  pet.sing();
//  pet.sleep();
//  } else {
//  throw "An unknown pet. Did you buy a rock?";
//  }
// }
// let dog = buyPet(myFavoritePet /* "dog" as defined above */, "Rocky");
// // dog is from type Dog (dog: Dog)
// // Error: Argument of type '"rock"' is not assignable to parameter of type "'cat' | "dog" | "bird".
// // Type '"rock"' is not assignable to type '"bird"'.
// // buyPet("rock", "Rocky");
// playWithPet(dog);
// Intersection  Type
// interface Knife {
//  cut():void;
// }
// interface BottleOpener{
//  openBottle():void;
// }
// interface Screwdriver{
//  turnScrew():void;
// }
// type SwissArmyKnife = Knife & BottleOpener & Screwdriver;
// function use(tool: SwissArmyKnife){
//  console.log("I can do anything!");
//  tool.cut();
//  tool.openBottle();
//  tool.turnScrew();
// }
function sum(x, y) {
    return x + y;
}
console.log(sum(5, 5));
