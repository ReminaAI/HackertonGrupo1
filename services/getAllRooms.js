import { getAllRooms } from "../data/getElementsByID";

export async function getRooms() {
    return await getAllRooms()
}
export async function getUnbookedRooms() {
    return await getAllRooms()
}