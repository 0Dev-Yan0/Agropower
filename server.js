const express = require("express"); //! Trazendo o express ao projeto;
const app = express(); //! Criação do servidor para uso adjacente;
const porta = process.env.PORT || 8000; //! Caso não encontre uma porta aberta se direcione para a 8000 disponível;

app.get("/api", (req, res) => {
    res.send({mensagem: "Miau"});
}); //! Rota base da api que envia um objeto JSON e se conecta diretamente com o Front;

app.listen(porta, () => {
    console.log(`Escutando a porta: ${porta}`);
}); //! Aonde o servidor do Back está rodando ao ser escutado pela porta 8000;