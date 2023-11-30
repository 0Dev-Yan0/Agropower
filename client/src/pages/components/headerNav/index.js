import styles from './style.module.css'
import Logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function HeaderNav() {
    return (
        <header>
            <div className={styles.geral_header}>
                <img src={Logo} alt='logo' className={styles.img_logo}></img>
                <div className={styles.cadastro}>
<<<<<<< HEAD
                    <a>Insumos</a>
                    <h1 className={styles.separacao}>|</h1>
                    <a>Alimentos</a>
                    <h1 className={styles.separacao}>|</h1>
                    <a>Entrega</a>
                    <h1 className={styles.separacao}>|</h1>
                    <a>Perfil</a>
=======
                    <Link>Login</Link>
                    <h1 className={styles.separacao}>|</h1>
                    <Link>Resgistrar</Link>
>>>>>>> 54d85390d21716c037c7bf54e76d0c085b36dbd6
                </div>
            </div>
        </header>
    )
}