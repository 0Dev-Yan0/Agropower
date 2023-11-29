const { Router } = require("express");
const users = [ ]; //! Lista que vai armazenar os dados recebidos da requisição antes enviar eles;

const rotaCadastro = Router();

rotaCadastro.post("/", (req,res) => {
    console.log(req);
    // users.push()
    res.send({ mensagem: "Cadastro feito com sucesso!" });
});

module.exports = rotaCadastro;

//! Propósito de envio automatizado para o banco de dados;