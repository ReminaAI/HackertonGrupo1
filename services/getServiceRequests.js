import { getAllRequests } from "../data/getElementsByID";

export async function getServiceRequests() {
    return await getAllRequests()
}