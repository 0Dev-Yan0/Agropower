
import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg'
import { Link, Route } from 'react-router-dom'

export default function HeaderCadastro() {
    return (
        <header >
            <div className={styles.geral_header}>
            <Link to='/'><img src={Logo} className={styles.img_logo}></img></Link>
            </div>
        </header>

    )
}