import getRequests from "../../services/getRequests"

export default async function handler(req, res) {
    if (req.method === "GET") {
        let requests = await getRequests()
        return res.status(200).json(requests)
    }
    res.status(400).json()
}
