import styles from './styles.module.css'

import Header from '../components/header_inicial'

export default function Home() {
    return (
        <div>
            <Header />
            <body>
                {/* geral */}
                <div >
                    {/* titulos  */}
                    <div>
                        <h1 className={styles.titulo_principal}>Bem vindo ao futuro do agronegócio.</h1>
                        <h2 className={styles.titulo_secundario}>Introdução a Transformação Digital do campo</h2>
                    </div>
                    <div>
                        <h1 className={styles.titulo_video}>Veja como utilizar nosso aplicativo para melhorar sua produção e venda.</h1>
                        <iframe width="300" height="215"
                            src="https://www.youtube.com/embed/UlqRvh_KEKw.">
                        </iframe>
                    </div>
                </div>
            </body>
        </div>
    )
}