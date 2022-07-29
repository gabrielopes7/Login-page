const User = require("../model/user");

const addUser =  async (req,res) => {
    let link = new User (req.body);
    try{
        await link.save();
        res.send("User criado com sucesso");
    }catch (error){
        res.send(error)
    }

};


// Aqui eu terei que criar um controller que pesquisa pelo usuario.

module.exports = {addUser}