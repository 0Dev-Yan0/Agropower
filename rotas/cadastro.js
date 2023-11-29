const { Router } = require("express");

const rotaCadastro = Router();

rotaCadastro.post("/", (req,res) => {
    res.send({ mensagem: "Cadastro feito com sucesso!" });
});

module.exports = rotaCadastro;