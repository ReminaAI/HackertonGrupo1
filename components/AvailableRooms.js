import { useState } from "react"
import { useEffect } from "react"
const GENERIC_BOOKEE = {
    Email: "",
    Username: "",
    Phone: "",
    Company: "",
    Room: ""
}

export default function AvailableRooms() {
    const [bookee, setBookee] = useState(GENERIC_BOOKEE)
    const [rooms, setRooms] = useState([])
    const [send, setSend] = useState(false)
    useEffect(() => {
        async function CallBack() {
            console.log('CallRooms')
            const res = await fetch(
                '/api/rooms/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            const json = await res.json()
            setRooms(json)
            console.log(rooms)


        }
        setSend(false)
        CallBack()
    }, [send])

    const BookRoom = () => {
        async function CallBack() {
            console.log('CallRooms')
            const res = await fetch(
                '/api/rooms/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(bookee)
            })
        }
        CallBack()
        setSend(true)
    }
    return (
        <div>
            {rooms.map(e => <div key={e._id}>{e.roomName}</div>)}
            <form onSubmit={(e) => {
                e.preventDefault(),
                    BookRoom()
            }}>
                <input required onChange={(e) => setBookee({ ...bookee, Username: e.target.value })} value={bookee.Username} placeholder="Insert Name" type="text" />
                <input required onChange={(e) => setBookee({ ...bookee, Email: e.target.value })} value={bookee.Email} placeholder="Insert Email" type="email" />
                <input required onChange={(e) => setBookee({ ...bookee, Company: e.target.value })} value={bookee.Company} placeholder="Insert Company" type="text" />
                <input required onChange={(e) => setBookee({ ...bookee, Phone: e.target.value })} value={bookee.Phone} placeholder="Insert Phone Number" type="number" />
                <input required onChange={(e) => setBookee({ ...bookee, Room: e.target.value })} placeholder="Insert Room" type="text" />
                <input value="Book Room" type="submit" />
            </form>
            This IS where the rooms ARE
        </div>
    )
}