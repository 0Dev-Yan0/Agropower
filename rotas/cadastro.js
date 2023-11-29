const { Router } = require("express");

const rotaCadastro = Router();

rotaCadastro.post("/", (req,res) => {
    res.send("Cadastro feito com sucesso!");
})