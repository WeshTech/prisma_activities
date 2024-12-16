import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // prisma Queries

    //creating a user
    // const user = await prisma.user.create({
    //     data: {
    //         name: "John Doe",
    //         email: "john@gmail.com",
    //     }
    // })


    //getting all the users
    // const users = await prisma.user.findMany();

    
    //creating an article and associate it with the user
    // const article = await prisma.article.create({
    //     data: {
    //         title: "John first Article",
    //         body: "This is the body of the article",
    //         author: {
    //             connect: {
    //                 id: 1,
    //             }
    //         }
    //     }
    // })


    //getting all the articles
    // const articles = await prisma.article.findMany();

    //creating another user
    // const user2 = await prisma.user.create({
    //     data: {
    //         name: "Janet Wamuyu",
    //         email: "janet@gmail.com",
    //     }
    // })


    //create an article and link it with the user
    // const article2 = await prisma.article.create({
    //    data: {
    //     title: "This is a sapla",
    //     body: "hello there",
    //     author: {
    //         connect: {
    //             id: 1,
    //         }
    //     }
    //    } 
    // })

    // console.log(article2);
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch( async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})