import { MongoClient } from "mongodb" //Create a mongo Client
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
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
    console.log("Database")
    return await client.db(dbName).collection(collectionName)
}
