// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createUser } from "../../services/createUser"
import { getRooms } from "../../services/getAllRooms"

export default async function handler(req, res) {
  if (req.method === "GET") {
    let rooms = await getRooms()
    return res.status(200).json(rooms)
  }
  if (req.method === "POST") {
    await createUser(req.body)
    return res.status(200).json()
  }
  res.status(400).json()
}
