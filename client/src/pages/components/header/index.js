
import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg'

export default function Header() {
    return (
        <header >
            <div className={styles.geral_header}>
                <img src={Logo} className={styles.img_logo}></img>
                <div className={styles.cadastro}>
                    <a>Login</a>
                    <h1 className={styles.separacao}>|</h1>
                    <a>Resgistrar</a>
                </div>
            </div>
        </header>

    )
}