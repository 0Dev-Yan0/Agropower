import HeaderNav from "../../components/headerNav";
import iconTelefone from "../../../assets/icon_telefone.png";
import iconLocalizacao from "../../../assets/icon_localizacao.png";
import imgPerfil from "../../../assets/foto_perfil_cliente.png";


function PerfilCliente() {
    return(
        <div>
            <HeaderNav/>
            <main>
                <section className="perfil_container">
                    <div className="perfil_dados">
                        <img src={imgPerfil} alt="imagem perfil"></img>
                        <div>
                            <h2 className="perfil_nome">José Carlos Palma</h2>
                            <div className="perfil_telefone">
                                <img src={iconTelefone} alt="icon telefone"/>
                                <p>(12) 3456-7890</p>
                            </div>
                            <div className="perfil_localizacao">
                                <img src={iconLocalizacao} alt="icon de localização"/>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default PerfilCliente;