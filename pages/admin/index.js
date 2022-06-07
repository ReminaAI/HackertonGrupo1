import { useEffect, useState } from "react"

export default function Admin() {
    const [requests, setRequests] = useState([])
    useEffect(() => {
        async function CallBack() {
            const res = await fetch(
                '/api/requests/', {
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
    return (<div>
        WE ARE THE ADMINS
        {
            requests.map((e, i) => {
                return <div key={i}>{e._id}</div>
            })
        }
    </div>)
}