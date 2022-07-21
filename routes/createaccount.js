const express = require('express');
const router = express.Router();
const users = require('../model/users');

router.get("/show", (req,res) =>{
    res.json(JSON.stringify(users.userShow()));
});

// Consigo gravar os usuários pelo Insomnia, agora preciso achar uma maneira de manter os usuários salvos em um banco de dados e fazer na minha página principal um modo de achar ele nesse banco.

// Preciso achar uma maneira de não permitir envio de formulário se tiver com erro.

// Eu não precisarei mostrar meu usuário na tela, e sim fazer uma validação em um banco de dados para que eu possa mostrar uma página que estará logado o meu usuário "correto" e será mostrado na tela

router.post("/newUser", express.json(), (req,res) =>{
    
    let id = ID();
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    users.newUser(id, name,lastName,email,password);

    res.send("User Adicionado");;

})

function ID(){
    return Math.random().toString(36).substring(2,9)
}

module.exports = router;