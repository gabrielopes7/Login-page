const User = require("../model/user");
const bcrypt = require("bcryptjs");
const user = require("../model/user");


const addUser = async (req, res) => {
  let link = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  })
  let find = await User.findOne({ email: link.email });
  try {
    if (find) {
      res.status(205).send("Email já cadastrado");
    } else {
      await link.save();
      res.status(201).send("User criado com sucesso");
    }
  } catch (error) {
    res.send(error);
  }
};

const validUser = async (req, res) => {
  const userSelected = await User.findOne({email: req.body.email})
  const passwordMatched = bcrypt.compareSync(req.body.password, userSelected.password);

  if(userSelected && passwordMatched){
    res.redirect("/minha-conta");
  }else{
    res.status(400).send("Email ou senha incorreta!")
  }

};

module.exports = { addUser, validUser };
