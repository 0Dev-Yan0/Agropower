const { Router } = require("express");

const rotaApi = Router();

rotaApi.get("/", (req,res) => {
    res.send({ mensagem: "API funcionando corretamente :)" });
});

module.exports = rotaApi;