import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Function to insert user in db///////////////////////////////////////////////////////////////////////////
/*
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select : {
            id: true,
            password: true
        },
    })
    console.log("User created successfully", res);
}

insertUser("test2@gmail.com", "pass2", "Mony", "Shaw");

*/

//Function to update data in db//////////////////////////////////////////////////////////////////////////////

//Typescript thing - for type checking
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log("Updated user : ", res);
}

updateUser("test1@gmail.com", {
  firstName: "Updated",
  lastName: "User1",
});
