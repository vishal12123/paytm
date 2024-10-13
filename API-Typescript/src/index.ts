// interface User{
//   name:string,
//   age:number
// }


// function sumOfAge(user1:User, user2:User){
//   return user1.age + user2.age;
// }

// const age = sumOfAge({name:"Vishal",age:20},{name:"Jira",age:30});

// console.log(age);


interface User{
  id:string,
  name:string,
  age:number,
  email:string,
  password:string
}

type UserProfile = Pick<User,"name" | "age" |'email'>

const displayUserProfile = (user:UserProfile) =>{
  console.log(`Name: ${user.name} , Email: ${user.email}`);
}