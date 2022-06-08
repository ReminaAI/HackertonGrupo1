import { useEffect, useState } from "react"
import styles from "../../styles/admin.module.css"
export default function Admin() {
    const [requests, setRequests] = useState([])
    const [request, setRequest] = useState({})

    useEffect(() => {
        async function CallBack() {
            const res = await fetch(
                '/api/requests/all', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            const json = await res.json()
            setRequests(json)


        }
        CallBack()
    }, [])


    console.log(requests)
    return (<div className={styles.container}>
        <div className={styles.backgroundRectangle}>
            <div className={styles.reservations}>
                <h1>RESERVATIONS</h1>
            </div>
            <div className={styles.allReservations}>
                {
                    requests.map((e, i) => {
                        //getUserAndRoom(e.userId, e.roomId)
                        return <div className={styles.request} key={i}>
                            <h3>-ROOM NAME</h3>
                            <p>{e.Room.roomName}</p>
                            <h3>-USERNAME</h3>
                            <p>{e.Username}</p>
                            <h3>-COMPANY NAME</h3>
                            <p>{e.Company}</p>
                            <h3>-EMAIL</h3>
                            <p>{e.Email}</p>
                            <h3>-PHONE NUMBER</h3>
                            <p>{e.Phone}</p>
                            <h3>-DATE</h3>
                            <p>{e.Date}</p>
                            <h3>-START HOUR</h3>
                            <p>{e.Hour}</p>
                            <div className={styles.buttons}>
                                <button>Check</button>
                                <button>Decline</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>)
}