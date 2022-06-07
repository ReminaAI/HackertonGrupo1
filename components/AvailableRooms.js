import { useState } from "react"
import { useEffect } from "react"
import RequestForm from "./RequestForm"
const GENERIC_BOOKEE = {
    Email: "",
    Username: "",
    Phone: "",
    Company: "",
    Room: "",
    Date: "",
    Hour: ""
}
import styles from "../styles/rooms.module.css"

export default function AvailableRooms() {
    const [bookee, setBookee] = useState(GENERIC_BOOKEE)
    const [rooms, setRooms] = useState([])
    const [send, setSend] = useState(false)
    useEffect(() => {
        async function CallBack() {
            const res = await fetch(
                '/api/rooms/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            const json = await res.json()
            setRooms(json)


        }
        setSend(false)
        CallBack()
    }, [send])

    const BookRoom = () => {
        async function CallBack() {
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
        //setBookee(GENERIC_BOOKEE)
    }
    return (
        <div>
            <RequestForm bookee={bookee} setBookee={setBookee} BookRoom={BookRoom} />
            <div>
                {rooms.map((e, i) => {
                    <div className={`${styles.room}`} key={e._id}>asdadwd</div>
                })}
            </div>
            This IS where the rooms ARE
        </div>
    )
}