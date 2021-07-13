const express = require('express');
var cors = require('cors');
const app = express();

const cadastro = require("./src/routes/cadastro");
const arquivo = require("./src/routes/arquivo");
const agendamentos = require("./src/routes/agendamentos");
const imagens = require("./src/routes/imagem");
const users = require("./src/routes/users");


app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '25mb' }));

app.use('/cadastro', cadastro);
app.use('/arquivo', arquivo);
app.use('/agendamentos', agendamentos);
app.use('/users', users);
app.use('/images', imagens);


app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

