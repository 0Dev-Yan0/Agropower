const { Router } = require("express");

const rotaLogin = Router();

rotaLogin.get("/", (req,res) => {
    res.send({ mensagem: "Login completado com sucesso!" });
});

module.exports = rotaLogin;