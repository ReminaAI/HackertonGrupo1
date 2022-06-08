import { getMongoCollection } from "./database"
import { ObjectId } from "mongodb";

const DB_NAME = "hack301"
const COLLECTION_USERS = "Users"
const COLLECTION_ROOMS = "Rooms"
const COLLECTION_ADMIN = "Admin"
const COLLECTION_REQUESTS = "Requests"

export async function getRoomById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_ROOMS)
    if (!ObjectId.isValid(id)) return null
    return await collection.findOne({ _id: ObjectId(id) })
}
export async function getUserById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
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
        { _id: ObjectId(id) }, //Procura pelo userId
        { $set: { userID: userId } }, //Define os items
        { upsert: true } //Se não encontrar, cria
    )
}
export async function requestARoom(body, userId, roomId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_REQUESTS)
    return await collection.insertOne({
        room: roomId,
        user: userId,
        Date: body.Date,
        Hour: body.Hour
    })
}
export async function getAllRequests() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.find().toArray()
}