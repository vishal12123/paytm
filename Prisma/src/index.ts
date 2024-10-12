import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   try {
//     const res = await prisma.user.create({
//       data: {
//         email: username,
//         password,
//         firstName,
//         lastName,
//       },
//     });
//     console.log('User inserted:', res);
//   } catch (error) {
//     console.error('Error inserting user:', error);
//   } finally {
//     // Close the Prisma client after the database interaction is complete
//     await prisma.$disconnect();
//   }
// }

// // Example usage
// insertUser('john.doe@example.com', 'securepassword', 'John', 'Doe');



interface UpdateParams {
  firstName:string,
  lastName:string

}

async function updateUser(username:string,{
  firstName,
  lastName
}:UpdateParams){
 const res = await prisma.user.update({
    where:{email:username},
    data:{

      firstName,
      lastName
    }
  })
  console.log(res);
}

updateUser("john.doe@example.com",{firstName:"vishal",lastName:"vishakll"})