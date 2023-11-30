import styles from './styles.module.css'

import HeaderCadastro from '../components/header_cadastro'


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
                            <input className={styles.container} placeholder='Insira seu nome...'></input>
                            <input className={styles.container} type='date'></input>
                            <input className={styles.container} placeholder='CEP'></input>
                            <input className={styles.container} placeholder='Cidade'></input>
                            <select className={styles.container} placeholder='Selecione'></select>
                            <input className={styles.container} placeholder='Insira sua senha...'></input>
                            <input className={styles.container} placeholder='Confirme sua senha...'></input>
                    </div>
                    <div>
                        <h1 className={styles.verifica_cadastro}>Já está cadastrado? Clique aqui</h1>
                    </div>
                </div>
            </body>
        </div>
    )
}