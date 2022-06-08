import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/defaultPage.module.css'




export default function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <div className={styles.text} >
          <h1>WELCOME TO <br></br>COWORK</h1>
          <p>A coworkin space with a comunity<br></br> of people like you.</p>
          <Link href="/rooms"><button>Book Now!</button></Link>
        </div>
        <div className={styles.image}><img className={styles.image} src='homeimg2.jpeg' /></div>
      </div>
    </div>

  )
}
/* <div className={styles.quadradoCinzento}>

        <div className={styles.divx}>
          <h1 className={styles.div1H1}>WELCOME TO <br />COWORK</h1>
          <p className={styles.divP1}>A coworking space with a <br />community of people like you.</p>
          <button className={styles.homeButton}>Book now!</button>


          <div className={styles.div2Container}>
            <img className={styles.image2} src="homeimg2.jpeg"></img>
          </div>
        </div>
      </div> */