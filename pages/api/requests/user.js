import { getRoomByIdServ, getUserByIdServ } from "../../../services/findByID"

export default async function handler(req, res) {
    if (req.method === "GET") {
        //console.log(req.headers.userid, req.headers.roomid)
        let user = await getUserByIdServ(req.headers.userid)
        let room = await getRoomByIdServ(req.headers.roomid)
        return res.status(200).json({ user, room })
    }
    res.status(400).json()
}