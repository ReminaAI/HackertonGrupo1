import Link from "next/link"
import styles from "../styles/globalstyles.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/"><div className={styles.image}><img src="/CoworkIT.png" /></div></Link>
            <div className={styles.menu}>
                <Link href="/"><div> <h4>HOME</h4></div></Link>
                <Link href="/rooms"><div><h4>ROOMS</h4></div></Link>
                <Link href="/services"><div><h4>SERVICES</h4></div></Link>
            </div>
        </div>
    )
}