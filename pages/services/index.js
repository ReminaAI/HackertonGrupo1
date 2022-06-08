import Head from 'next/head'
import Image from 'next/image'
import styles from "../../styles/services.module.css"




export default function Home() {
    return (

        <div className={styles.container}>
            <div className={styles.backgroundContainer}>
                <div className={styles.text} >
                    <div className={styles.services}>
                        <h1>SERVICES</h1>
                        <p>- Projector</p>
                        <p>- Wifi</p>
                        <p>- Microphone</p>
                    </div>
                    <div className={styles.prices}>
                        <h1>PRICES</h1>
                        <p>Rooms - 5&euro; per m<sup>2</sup>/hour</p>
                        <p>Auditorium - 100&euro;/hour</p>
                        <p className={styles.careful}>*Be careful on how you leave the rooms.</p>
                    </div>


                </div>
                <div className={styles.image}><img className={styles.image} src='serviceImage.jpeg' /></div>
            </div>
        </div>


    )
}