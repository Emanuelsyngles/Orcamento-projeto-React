import { Link } from "react-router-dom"

import Container from "./Container"

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/"></Link>
            <ul className={styles.list}> 
                <li className={styles.item}>
                    <Link to="/contact">Contato</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/company">Empresa</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/newproject">Novo projeto</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar