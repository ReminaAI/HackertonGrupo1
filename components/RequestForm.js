import styles from "../styles/form.module.css"
export default function RequestForm({ BookRoom, bookee, setBookee, pos }) {
    return (
        <div className={styles.formMenu}>
            <form onSubmit={(e) => {
                e.preventDefault(),
                    BookRoom(pos.room)
            }}>

                <h3>{pos.room.roomName === "Auditorium" ? pos.room.roomName : "Sala " + pos.room.roomName}</h3>
                <input required onChange={(e) => setBookee({ ...bookee, Username: e.target.value })} value={bookee.Username} placeholder="Insert Name" type="text" />
                <input required onChange={(e) => setBookee({ ...bookee, Email: e.target.value })} value={bookee.Email} placeholder="Insert Email" type="email" />
                <input required onChange={(e) => setBookee({ ...bookee, Company: e.target.value })} value={bookee.Company} placeholder="Insert Company" type="text" />
                <input required onChange={(e) => setBookee({ ...bookee, Phone: e.target.value })} value={bookee.Phone} placeholder="Insert Phone Number" type="number" />
                <input required onChange={(e) => setBookee({ ...bookee, Date: e.target.value })} type="date" />
                <input required onChange={(e) => setBookee({ ...bookee, Hour: e.target.value })} type="time" />
                <input value="Book Room" type="submit" />
            </form>
        </div>
    )
}