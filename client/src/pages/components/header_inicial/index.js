
import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg'
import { Link, Route } from 'react-router-dom'
import Register from '../../Register'

export default function Header() {
    return (
        <header >
            <div className={styles.geral_header}>
                <Link to='/'><img src={Logo} className={styles.img_logo}></img></Link>
                <div className={styles.cadastro}>
                    <Link className={styles.link} >Login</Link>
                    <h1 className={styles.separacao}>|</h1>
                    <Link className={styles.link} to='/register'>Resgistrar</Link>
                </div>
            </div>
        </header>

    )
}