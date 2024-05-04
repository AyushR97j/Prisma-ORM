import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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