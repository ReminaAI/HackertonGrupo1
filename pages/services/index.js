import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'




export default function Home() {
    return (

        <div className={styles.container}>

            <div className={styles.quadradoCinzento}>

                <div className={styles.divx}>
                    <h1 className={styles.div1H2}>SERVICES</h1>
                    <p className={styles.div1P2}>- Projector</p>
                    <p className={styles.div1P2}>- Wi-fi</p>
                    <p className={styles.div1P2}>- Microphone</p>

                    <h1 className={styles.div1H3}>PRICES</h1>
                    <p className={styles.div1P3}>Rooms - 5&euro; per m<sup>2</sup>/hour</p>
                    <p className={styles.div1P3}>Auditorium - 100&euro;/hour</p>



                    <div className={styles.div2Container}>
                        <img className={styles.image3} src="serviceimg1.png"></img>
                    </div>
                </div>
            </div>


        </div>

    )
}