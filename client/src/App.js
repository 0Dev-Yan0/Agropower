import React, {Component} from "react"; //! Biblioteca do react a ser instalada com o pacote de "Component";
import logo from "./logo.svg";
import "./App.css";
import Register from './pages/Register';
import Localizacao from "./pages/localizacao";
import PerfilCliente from "./pages/Perfil/Perfil_cliente";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
function App(){
  
  return (
    <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/register" element={<Register />}/>
            <Route index path="/localizacao" element={<Localizacao/>}/>
            <Route index path="/perfil_cliente" element={<PerfilCliente/>}/>
          </Routes>
        </BrowserRouter>
    );
  };
  
export default App;
  
// | //Basicamente a função abaixo se trata de classificar o "App" como uma extensão de que o "Component" faz;
// chamadaAPI = async () => {
//   let resposta = await fetch("/api");
//   let body = await resposta.json();

//   if (resposta.status !== 200) {
//     throw Error("Erro no status da Api :(");
//   };

//   return body;
// }; // A conexão com a API em si pelo uso assíncrono do fetch na rota "/api" [ futuramente será bem alterado essa parte ] e retornando as respostas [ mensagens vindas delas no "res" ] como JSON;

// | // chamadaCadastro = async () => {
// | //   let resposta = await fetch("/cadastro");
// | //   let body = await resposta.json();

// | //   if (resposta.status !== 200) {
// | //     throw Error("Erro no status do Cadastro :(");
// | //   };

// | //   return body;
// | // };

// componentDidMount() {
//   this.chamadaAPI()
//     .then(res => {
//       this.setState({ 
//       resposta: res.mensagem,
//       teste: res.teste });
//     })
//     .catch(err => console.error("Erro da chamada de API: ", err));

//  |   // this.chamadaCadastro()
//  |   // .then(res => {
//  |   //   this.setState({ 
//  |   //     teste: res.teste
//  |   //    }).catch(err => console.error("Erro da chamada do Cadastro: ", err));
//  |   // }) 
// }; // Ativando a cada instância do projeto a chamada pela API [ chamadaAPI ] e transformando a resposta na mensagem que vem de API [ res.mensagem ];

// render() {
//   return (
//     <div className="App">
//       <p className="Api-teste">{this.state.teste} = teste</p>
//       <p className="Api_mensagem">{this.state.resposta}</p>
//      <Register />
//     </div>
//   );
// };
// };

// export default App;