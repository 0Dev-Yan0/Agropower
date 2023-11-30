const { Router } = require("express");

const rotaEstoque = Router();

rotaEstoque.post("/", (req,res) => {
    res.send({ mensagem: "API funcionando corretamente :)" });
});

module.exports = rotaEstoque;

//! Propósito de conferência, tanto quanto envio como recebimento e encaminhamento de dados através dos arquivos JSON;