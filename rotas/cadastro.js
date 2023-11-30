const { Router } = require("express");
const users = [ ]; //! Lista que vai armazenar os dados recebidos da requisição antes enviar eles;

const rotaCadastro = Router();

rotaCadastro.get("/", (req,res) => {
    try {
        res.send({ mensagem: "GET em rotaCadastro funcionando corretamente :)" });
        console.warn("Ocorreu um GET na: | rotaCadastro |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
});

rotaCadastro.post("/", (req,res) => {
    try {
    res.send({ mensagem: "POST em rotaCadastro funcionando corretamente :)" });
    console.warn("Ocorreu um POST na: | rotaCadastro |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
});

module.exports = rotaCadastro;
//! Propósito de envio automatizado para o banco de dados;