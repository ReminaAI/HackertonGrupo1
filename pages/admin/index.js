import { useEffect, useState } from "react"
import styles from "../../styles/admin.module.css"
import stylesDefault from "../../styles/defaultPage.module.css"

export default function Admin({ loggedIn, setLoggedIn }) {
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
    function removeFromList(id) {
        setRequests(requests.filter(e => e._id !== id))
    }

    return (
        <div className={styles.container}>

            {!loggedIn &&
                <div className={styles.backgroundRectangle}>
                    <div className={styles.text} >
                        <h1>WELCOME<br></br>FILIPA</h1>
                        <div className={styles.adminLogin}>
                            <form onSubmit={(e) => {
                                e.preventDefault(),
                                    setLoggedIn(true)
                            }}>
                                <input placeholder="Email" type="email" />
                                <input placeholder="Password" type="password" />
                                <input className={styles.buttonLog} value="Log In" type="submit" />
                            </form >
                        </div>
                    </div>
                    <div className={stylesDefault.image}><img className={stylesDefault.image} src='adminImage.jpeg' /></div>

                </div>}
            {loggedIn &&
                <div className={styles.backgroundRectangle2}>
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
                                        <button onClick={() => removeFromList(e._id)}>Check</button>
                                        <button onClick={() => removeFromList(e._id)}  >Decline</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>}

        </div>)
}