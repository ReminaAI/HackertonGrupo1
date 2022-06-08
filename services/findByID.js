import { getRoomById, getUserById } from "../data/getElementsByID"

export async function getUserByIdServ(userID) {
    return await getUserById(userID)
}
export async function getRoomByIdServ(roomID) {
    return await getRoomById(roomID)
}