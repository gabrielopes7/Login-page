const User = require("../model/user");

const addUser =  async (req,res) => {
    let link = new User (req.body);
    try{
        await link.save();
        res.status(201).send("User criado com sucesso");
    }catch (error){
        res.send(error)
    }

};


const validUser = async (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;

    let doc = await User.findOne({email: email, password: password});
    if(doc){
        res.redirect("/minha-conta");
    }else{
        let validEmail = await User.findOne({email: email});
        if(validEmail){
            res.status(401).send("Verifique sua senha");
        }else{
            res.status(400).send("Este email não está cadastrado")
        }
    }


}

module.exports = {addUser , validUser}
