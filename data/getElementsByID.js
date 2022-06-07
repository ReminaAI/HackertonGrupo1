import { getMongoCollection } from "./database"
import { ObjectId } from "mongodb";

const DB_NAME = "hack301"
const COLLECTION_USERS = "Users"
const COLLECTION_ROOMS = "Rooms"
const COLLECTION_ADMIN = "Admin"

export async function getRoomById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_ROOMS)
    if (!ObjectId.isValid(id)) return null
    return await collection.findOne({ _id: ObjectId(id) })
}
export async function getAllRooms(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_ROOMS)
    return await collection.find().toArray()
}
export async function getUnbookedRooms() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_ROOMS)
    return await collection.find({ user: { $not: { $exists: true } } }).toArray()
}
export async function createUserDB(user) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.insertOne(user)
}
export async function updateRoomByID(id, userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_ROOMS)
    return await collection.updateOne(
        { _id: id },
        { user: userId }
    )
} 