const express = require('express');
const app = express();
const path = require("path");
const criarconta = require('./routes/createaccount');

app.use(express.static(path.join(__dirname, 'client')));
app.use("/criarconta", express.static(path.join(__dirname, 'client/criarconta.html')));
app.use("/criarconta", criarconta);








const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Servidor em funcionando na porta " + PORT);
})