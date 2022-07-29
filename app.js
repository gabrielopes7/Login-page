const express = require('express');
const app = express();
const path = require("path");
const criarconta = require('./routes/createaccount');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/user").then(db =>{console.log("Banco carregado")}).catch(error =>{console.log(error)})



app.use(express.static(path.join(__dirname, 'client')));

// Agora eu precisarei, procurar meu usuario em meu banco de dados, e após isso validar a senha e entrar na conta, que será uma página dando Olá para a pessoa.


app.use("/criarconta", express.static(path.join(__dirname, 'client/criarconta.html')));
app.use("/criarconta",express.json() ,criarconta);








const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Servidor em funcionando na porta " + PORT);
})