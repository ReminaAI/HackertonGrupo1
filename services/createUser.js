import { createUserDB, updateRoomByID } from "../data/getElementsByID";

export async function createUser(body) {
    return (
        await createUserDB(body),
        await updateRoomByID(body.Room)
    )
}