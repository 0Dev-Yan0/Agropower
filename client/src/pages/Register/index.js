import styles from './styles.module.css'

import HeaderCadastro from '../components/header_cadastro'

import maps from '../../assets/maps.svg'

import BotaoConfirmar from '../components/BotaoConfirmar'

export default function Register() {
    return (
        <div>
            <HeaderCadastro />
            <body>
                {/* geral */}
                <div  >
                    {/* titulos  */}
                    <div>
                        <h1 className={styles.titulo_principal}>Cadastro</h1>
                    </div>
                    <div className={styles.geral}>
                            <input className={styles.container} type='text' placeholder='Insira seu nome...'></input>
                            <input className={styles.container} type='date'></input>
                            <img className={styles.maps} src={maps} type='text'></img>
                            <select className={styles.container} type='text' placeholder='Selecione'></select>
                            <input className={styles.container} type='text' placeholder='Insira sua senha...'></input>
                            <input className={styles.container} type='text' placeholder='Confirme sua senha...'></input>
                    </div>
                    <div>
                        <h1 className={styles.verifica_cadastro}>Já está cadastrado? Clique aqui</h1>
                    </div>
                    <div>
                        <BotaoConfirmar></BotaoConfirmar>
                    </div>
                </div>
            </body>
        </div>
    )
}