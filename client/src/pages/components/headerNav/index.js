import styles from './style.module.css'
import Logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function HeaderNav() {
    return (
        <header>
            <div className={styles.geral_header}>
                <img src={Logo} alt='logo' className={styles.img_logo}></img>
                <div className={styles.cadastro}>
                    <Link>Login</Link>
                    <h1 className={styles.separacao}>|</h1>
                    <Link>Resgistrar</Link>
                </div>
            </div>
        </header>
    )
}