import Logo from '../../assets/logo.svg'
import './styles.css'

export function Home() {
    return (
        <div>
            <header >
                <div className='geral_header'>
                    <img src={Logo} className='img_logo'></img>
                    <div className='cadastro'>
                        <a>Login</a>
                        <h1 className='separacao'>|</h1>
                        <a>Resgistrar</a>
                    </div>
                </div>
            </header>
        </div>
    )
}