const { Router } = require("express");

const rotaEstoque = Router();

rotaEstoque.get("/", (req,res) => {
    try {
        res.send({ mensagem: "GET em rotaEstoque funcionando corretamente :)" })
        console.warn("Ocorreu um GET na: | rotaEstoque |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

rotaEstoque.post("/", (req,res) => {
    try {
        res.send({ mensagem: "POST em rotaEstoque funcionando corretamente :)" });
        console.warn("Ocorreu um POST na: | rotaEstoque |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
});

module.exports = rotaEstoque;
//! Propósito de conferência, tanto quanto envio como recebimento e encaminhamento de dados através dos arquivos JSON;