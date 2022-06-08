import Link from "next/link"
import styles from "../styles/globalstyles.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/"><div className={styles.image}><img src="/CoworkIT.png" /></div></Link>
            <div className={styles.menu}>
                <Link href="/"><div> <h1>HOME</h1></div></Link>
                <Link href="/rooms"><div><h1>ROOMS</h1></div></Link>
                <Link href="/services"><div><h1>SERVICES</h1></div></Link>
            </div>
        </div>
    )
}