import styles from './styles.module.css'

import Header from '../components/header'

export default function CadastroProdutos() {
    return (
        <div>
            <Header />
            <body>
                {/* geral */}
                <div >
                    {/* titulos  */}
                    <div>
                        
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