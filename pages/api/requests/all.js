import { getServiceRequests } from "../../../services/getServiceRequests"


export default async function handler(req, res) {
    if (req.method === "GET") {
        let requests = await getServiceRequests()
        return res.status(200).json(requests)
    }
    res.status(400).json()
}