import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg'

export default function HeaderNav() {
    return (
        <header>
            <div className={styles.geral_header}>
                <img src={Logo} className={styles.img_logo}></img>
                <div className={styles.cadastro}>
                    <a>Insumos</a>
                    <h1 className={styles.separacao}>|</h1>
                    <a>Alimentos</a>
                    <h1 className={styles.separacao}>|</h1>
                    <a>Entrega</a>
                    <h1 className={styles.separacao}>|</h1>
                    <a>Perfil</a>
                </div>
            </div>
        </header>
    )
}