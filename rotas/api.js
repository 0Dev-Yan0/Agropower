const { Router } = require("express");

const rotaApi = Router();

rotaApi.get("/", (req,res) => {
    res.send({ mensagem: "API funcionando corretamente :)" });
});

rotaApi.post("/", (req,res) => {
    res.send({ mensagem: "Mensagem" });
});

module.exports = rotaApi;

//! Modulação principal para conexão com a API [ desmonstração ];