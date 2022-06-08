import Header from "./header";
import styles from "../styles/globalstyles.module.css"

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <Header />
            <main>{props.children}</main>
        </div>
    )
}