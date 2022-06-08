// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createUser } from "../../services/createUser"
import { getRooms } from "../../services/getAllRooms"

export default async function handler(req, res) {
  if (req.method === "GET") {
    let rooms = await getRooms()
    return res.status(200).json(rooms)
  }
  if (req.method === "POST") {
    console.log("THIS IS THE REQ BODY " + req.body.room)
    console.log("BODY:", req.body)
    await createUser(req.body)
    return res.status(200).json()
  }
  res.status(400).json()
}
