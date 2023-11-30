const { Router } = require("express");

const rotaLogin = Router();

rotaLogin.get("/", (req,res) => {
    try {
        res.send({ mensagem: "GET em rotaLogin funcionando corretamente :)" });
        console.warn("Ocorreu um GET na: | rotaLogin |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
});

rotaLogin.post("/", (req,res) => {
    try {
    res.send({ mensagem: "POST em rotaLogin funcionando corretamente :)" });
    console.warn("Ocorreu um POST na: | rotaLogin |");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
});

module.exports = rotaLogin;
//! Propósito de conferência ao banco de dados para permitir a entrada do usuário;