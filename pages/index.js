import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.quadradoCinzento}>

        <div className={styles.divx}>
          <h1 className={styles.div1H1}>WELCOME TO <br />COWORK</h1>
          <p className={styles.divP1}>A coworking space with a <br />community of people like you.</p>
          <button className={styles.homeButton}>Book now!</button>


          <div className={styles.div2Container}>
            <img className={styles.image2} src="homeimg2.jpeg"></img>
          </div>
        </div>
      </div>


    </div>

  )
}
