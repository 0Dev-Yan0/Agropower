
import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg'

export default function HeaderCadastro() {
    return (
        <header >
            <div className={styles.geral_header}>
                <img src={Logo} className={styles.img_logo}></img>
            </div>
        </header>

    )
}