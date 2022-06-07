import { getMongoCollection } from "./database"
import { ObjectId } from "mongodb";

const DB_NAME = "hack301"
const COLLECTION_USERS = "Users"
const COLLECTION_ROOMS = "Rooms"

export async function getRoomById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_ROOMS)
    if (!ObjectId.isValid(id)) return null
    return await collection.findOne({ _id: ObjectId(id) })
}
