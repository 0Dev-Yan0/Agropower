const { Router } = require("express");
const users = [ ]; //! Lista que vai armazenar os dados recebidos da requisição antes enviar eles;

const rotaCadastro = Router();

rotaCadastro.get("/", (req,res) => {
    res.send({ mensagem: "Get feito com sucesso na rota de cadastro!" });
    console.warn("Ocorreu um GET na: | rotaCadastro |");
});

rotaCadastro.post("/", (req,res) => {
    // users.push()
    res.send({ mensagem: "Cadastro feito com sucesso!" });
    console.warn("Ocorreu um POST na: | rotaCadastro |");
});

module.exports = rotaCadastro;

//! Propósito de envio automatizado para o banco de dados;