import { MongoClient } from "mongodb" //aosidfnpiuoasdngpiuerbiuaernbgiopaerbng
//const { MongoClient} = require("mongodb");
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DB_NAME = "hack301"
const COLLECTION_ROOMS = "Rooms"
const COLLECTION_USERS = "Users"
const COLLECTION_ADMIN = "Admin"
const COLLECTION_REQUESTS = "Requests"

let client;

export async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL) }
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return await client.db(dbName).collection(collectionName)
}


async function populate() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_ROOMS)
    await collection.insertMany([
        {
            "roomName": "1",
            "size": 5,
            "price": 10
        },
        {
            "roomName": "2",
            "size": 7,
            "price": 14
        }
        ,
        {
            "roomName": "3",
            "size": 5,
            "price": 10
        }
        ,
        {
            "roomName": "4",
            "size": 6,
            "price": 12
        }
        ,
        {
            "roomName": "5",
            "size": 6,
            "price": 12
        }
        ,
        {
            "roomName": "6",
            "size": 8,
            "price": 16
        }
        ,
        {
            "roomName": "7",
            "size": 3,
            "price": 6
        }
        ,
        {
            "roomName": "8",
            "size": 5,
            "price": 10
        }, {
            "roomName": "Auditorium",
            "size": 20,
            "price": 60
        }

    ])
    ////???????????????????????
    // const collectionUser = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    // await collectionUser.insertOne({
    //     "Username": "Xavier",
    //     "Company": "XavierCo",
    //     "Email": "xavier@gmail.com",
    //     "Phone": 987654321

    // })
    const collectionAdmin = await getMongoCollection(DB_NAME, COLLECTION_ADMIN)
    await collectionAdmin.insertOne({
        "Username": "Filipa",
        "Password": "123qwe",
        "Email": "filipa@gmail.com",
        "Phone": 123123456456,
    })
}



populate()
    .then(() => console.log("Done Populating"))
    .catch((err) => console.log(err))