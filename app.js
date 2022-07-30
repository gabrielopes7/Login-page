const express = require('express');
const app = express();
const path = require("path");
const criarConta = require('./routes/createaccount');
const validarUser = require('./routes/signuser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/user").then(db =>{console.log("Banco carregado")}).catch(error =>{console.log(error)})



app.use(express.static(path.join(__dirname, 'client')));
app.use("/", express.json(), validarUser);


app.use("/criarconta", express.static(path.join(__dirname, 'client/criarconta.html')));
app.use("/criarconta",express.json() ,criarConta);

app.use("/minha-conta", express.static(path.join(__dirname, "client/user.html")));








const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Servidor em funcionando na porta " + PORT);
})