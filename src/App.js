const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const dirname = __dirname

app.listen(port, () => {
    console.log(`servidor iniciado na porta : http://localhost:${port}`)
})