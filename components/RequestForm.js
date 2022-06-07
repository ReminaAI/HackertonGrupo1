export default function RequestForm({ BookRoom, bookee, setBookee }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault(),
                BookRoom()
        }}>
            <input required onChange={(e) => setBookee({ ...bookee, Username: e.target.value })} value={bookee.Username} placeholder="Insert Name" type="text" />
            <input required onChange={(e) => setBookee({ ...bookee, Email: e.target.value })} value={bookee.Email} placeholder="Insert Email" type="email" />
            <input required onChange={(e) => setBookee({ ...bookee, Company: e.target.value })} value={bookee.Company} placeholder="Insert Company" type="text" />
            <input required onChange={(e) => setBookee({ ...bookee, Phone: e.target.value })} value={bookee.Phone} placeholder="Insert Phone Number" type="number" />
            <input required onChange={(e) => setBookee({ ...bookee, Room: e.target.value })} placeholder="Insert Room" type="text" />
            <input required onChange={(e) => setBookee({ ...bookee, Date: e.target.value })} type="date" />
            <input required onChange={(e) => setBookee({ ...bookee, Hour: e.target.value })} type="time" />
            <input value="Book Room" type="submit" />
        </form>
    )
}