
import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg'
import { Link, Route } from 'react-router-dom'
import duvida from '../../../assets/duvida.svg'

export default function HeaderCadastro() {
    return (
        <header >
            <div className={styles.geral_header}>
            <div>
            <Link to='/'><img src={Logo} className={styles.img_logo}></img></Link>
            </div>
            <div>
                <img src={duvida}></img>
            </div>
            </div>
        </header>

    )
}