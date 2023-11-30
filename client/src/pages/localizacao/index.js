import lupa from '../../assets/magnifying-glass.png';

function Localizacao() {
    return(
        <div>
            <header>

            </header>
            <main>
                <h2>Localização dos fornecedores</h2>

                <div className="container_busca_fornecedor">
                    <input placeholder="Buscar fornecedor"></input>
                    <button><img src={lupa} alt='lupa de pesquisa'></img></button>
                    
                </div>
            </main>
        </div>
    )
}

export default Localizacao;