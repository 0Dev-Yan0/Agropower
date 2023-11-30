const { Router } = require("express"); //! Chamada da ferramenta de rota;

const rotaApi = Router(); //! Criação da rota;

rotaApi.get("/", (req,res) => {
    try {
        res.send({ 
        mensagem: "GET em rotaApi funcionando corretamente :)",
        teste: "Teste funcionou legal bro"});
        console.warn("Ocorreu um GET na: | rotaApi |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
}); //! Ao ocorrer um GET na rotaApi, você obtem a requisiçãp [ req ] e a resposta [ res ], e tenta [ try ] enviar um JSON com objeto de "mensagem", caso ocorra um erra, pegue [ catch ] esse erro e defina o status da resposta como 500 [ https://http.cat/status/500 ] enquanto envia a mensagem [ message ] do erro;

rotaApi.post("/", (req,res) => {
    try {
        res.send({ mensagem: "POST em rotaApi funcionando corretamente :)" });
        console.warn("Ocorreu um POST na: | rotaApi |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
}); //! O mesmo tipo de metodologia da acima será usada aqui para garantir melhor estrutura e prevenção;

module.exports = rotaApi; //! Exportarndo a rota para que ela seja utilizada pelo servidor [ server.js ];

//! Modulação principal para conexão com a API [ desmonstração ];