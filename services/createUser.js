import { createUserDB, getRoomById, requestARoom, updateRoomByID } from "../data/getElementsByID";

export async function createUser(body) {
    let user = await createUserDB(body)
    let room = await getRoomById(body.Room)
    return (
        await requestARoom(body, user.insertedId, room._id)
    )
}