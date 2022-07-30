

class User {
  constructor(name, lastName, email, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

function catchInformation() {
  let name = document.getElementById("userName").value;
  let lastName = document.getElementById("userLastName").value;
  let email = document.getElementById("userEmail").value;
  let emailValid = document.getElementById("emailValidation").value;
  let password = document.getElementById("userPassword").value;
  let check = document.getElementById("checkAgree");

  if (
    email == "" ||
    emailValid == "" ||
    name == "" ||
    lastName == "" ||
    password == ""
  ) {
    window.alert("Verifique se há campos vazios");
    return false;
  } else {
    if (
      validEmail(email, emailValid) &&
      validCheck(check) &&
      validPassword(password)
    ) {
      const user = new User(name, lastName, email, password);
      submitUser(user);
    } else if (!validEmail(email, emailValid)) {
      window.alert("É necessário um email válido ou os emails são diferentes");
      return false;
    } else if (!validCheck(check)) {
      window.alert("Você precisa aceitar os termos");
      return false;
    } else if (!validPassword(password)) {
      window.alert("Sua senha deve cumprir as 4 regras");
      return false;
    }
  }
}

function submitUser(user) {
  const URL = "http://localhost:5000/criarconta/";
  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(user),
  };

  fetch(URL, options).then((res) => {
    if(res.status == 205){
      window.alert("Email já cadastrado");
    }else if(res.status == 201){
      window.alert("Conta criada com sucesso!");
    }
  });
}

function validPassword(password) {
  const rePassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
  if (!rePassword.test(password)) {
    return false;
  }
  return true;
}

function validEmail(email, emailValid) {
  var re = /\S+@\S+\.\S+/;

  if (!re.test(email) || !re.test(emailValid)) {
    return false;
  } else if (email.toLowerCase() !== emailValid.toLowerCase()) {
    return false;
  } else {
    return true;
  }
}

function validCheck(check) {
  if (check.checked) {
    return true;
  } else {
    return false;
  }
}
