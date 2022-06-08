import { useState } from "react"
import { useEffect } from "react"
import RequestForm from "./RequestForm"
import styles from "../styles/rooms.module.css"

const GENERIC_BOOKEE = {
    Email: "",
    Username: "",
    Phone: "",
    Company: "",
    Room: "",
    Date: "",
    Hour: ""
}

export default function AvailableRooms() {
    const [pos, setPos] = useState({
        room: "",
        left: 0,
        top: 0,
        clicked: false
    })
    const [bookee, setBookee] = useState(GENERIC_BOOKEE)
    const [rooms, setRooms] = useState([])
    const [send, setSend] = useState(false)
    const [added, setAdded] = useState({
        message: "Booking requested, please wait for admin approval.",
    })

    const [clicked, setClicked] = useState(false)


    function changeStates() {
        setClicked(false)
    }
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

    // useEffect(() => {
    //     setTimeout(changeStates(), 2000)
    // }, [clicked])



    function BookRoom(id) {
        setPos({ ...pos, clicked: false })
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 1000);
        // setTimeout(setClicked(false), 100000)
        async function CallBack(id) {
            const res = await fetch(
                '/api/rooms/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ ...bookee, Room: id })
            })
        }
        console.log(id)
        CallBack(id)
        setSend(true)
        //setBookee(GENERIC_BOOKEE)
    }
    function createMenu(posX, posY, ele) {
        setPos({
            room: ele,
            left: posX,
            top: posY,
            clicked: true
        })

    }
    return (
        <div className={styles.container}>
            {
                clicked && <div className={styles.popup}>{added.message}</div>
            }
            {pos.clicked &&
                <div onClick={() => setPos({ ...pos, clicked: false })} className={styles.screen}>
                    <div onClick={(e) => e.stopPropagation()} style={{ left: pos.left, top: pos.top }} className={styles.menu}>
                        <RequestForm pos={pos} bookee={bookee} setBookee={setBookee} BookRoom={BookRoom} />
                    </div>
                </div>}
            <div className={styles.backgroundRectangle}>
                <div>
                    <h1 className={styles.title}>ROOMS</h1>
                </div>
                <div className={styles.allrooms}>
                    <div className={styles.topdown}>
                        <div className={styles.topdownRooms}>
                            <div className={styles.roomsTop}>
                                {rooms.map((ele, i) => {
                                    if (i < 4) {
                                        return <div onClick={(e) => createMenu(e.pageX, e.pageY, ele)} className={`room${i + 1}`} key={ele._id}>{ele.roomName}</div>
                                    }

                                })}
                            </div>
                            <div className={styles.roomsBottom}>
                                {rooms.map((ele, i) => {
                                    if (i > 3 && i < 8) {
                                        return <div onClick={(e) => createMenu(e.pageX, e.pageY, ele)} className={`room${i + 1}`} key={ele._id}>{ele.roomName}</div>
                                    }

                                })}
                            </div>
                        </div>
                        <div className={styles.auditorium}>
                            {rooms.map((ele, i) => {
                                if (i === 8) {
                                    return <div onClick={(e) => createMenu(e.pageX, e.pageY, ele)} className={`auditorium`} key={ele._id}>{ele.roomName}</div>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}