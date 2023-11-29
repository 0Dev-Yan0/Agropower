//! Constantes de rotas--->
const rotaCadastro = require("./rotas/cadastro");
const rotaLogin = require("./rotas/login");
const rotaApi = require("./rotas/api")
//! Constantes de rotas--->

const express = require("express"); //! Trazendo o express ao projeto;
const app = express(); //! Criação do servidor para uso adjacente;
const porta = process.env.PORT || 8000; //! Caso não encontre uma porta aberta se direcione para a 8000 disponível;
const users = [ ];
const produtos = [ ];

app.use("/api", rotaApi); //! Rota base da api que envia um objeto JSON e se conecta diretamente com o Front;
app.use("/cadastro", rotaCadastro);
app.use("/login", rotaLogin);

app.listen(porta, () => {
    console.log(`Escutando a porta: ${porta}`);
}); //! Aonde o servidor do Back está rodando ao ser escutado pela porta 8000;