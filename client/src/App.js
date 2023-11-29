import React, {Component} from "react"; //! Biblioteca do react a ser instalada com o pacote de "Component";
import logo from "./logo.svg";
import "./App.css";
import Register from './pages/Register'

//! Basicamente a função abaixo se trata de classificar o "App" como uma extensão de que o "Component" faz;
class App extends Component {
  state = {
    resposta: ""
  }; //! No estado [ state ] atual em que se encontra as atualizações do projeto ele vai manter uma resposta, essa no qual será logo após definida pela conexão com a API;

  chamadaAPI = async () => {
    const response = await fetch("/api");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.mensagem);
    };

    console.log(body.mensagem);
    return body;
  }; //! A conexão com a API em si pelo uso assíncrono do fetch na rota "/api" [ futuramente será bem alterado essa parte ] e retornando as respostas [ mensagens vindas delas no "res" ] como JSON;

  componentDidMount() {
    this.chamadaAPI()
      .then(res => {
        console.log("Resposta da api -> " + res.mensagem);
        this.setState({ resposta: res.mensagem });
      })
      .catch(err => console.error("Erro da chamada de API:", err));
  }; //! Ativando a cada instância do projeto a chamada pela API [ chamadaAPI ] e transformando a resposta na mensagem que vem de API [ res.mensagem ];

  render() {
    return (
      <div className="App">
       <Register />
      </div>
    );
  };
};

export default App;