import styles from './styles.module.css'

import HeaderCadastro from '../components/header_cadastro'

export default function Register() {
    return (
        <div>
            <HeaderCadastro />
            <body>
                {/* geral */}
                <div >
                    {/* titulos  */}
                    <div>
                        <h1 className={styles.titulo}>Cadastro</h1>
                    </div>
                    <div>
                            <input className={styles.container} placeholder='Insira seu nome...'></input>
                            <input type='date' className={styles.container}></input>
                            <input className={styles.container} placeholder='CEP'></input>
                            <input className={styles.container} placeholder='Cidade'></input>
                            <select className={styles.container} placeholder='Selecione'></select>
                            <input className={styles.container} placeholder='Insira sua senha...'></input>
                            <input className={styles.container} placeholder='Confirme sua senha...'></input>
                    </div>
                    <div>
                        <h1>Já está cadastrado? Clique aqui</h1>
                    </div>
                </div>
            </body>
        </div>
    )
}