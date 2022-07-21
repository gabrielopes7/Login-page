let createUser = new Object();

class User {
    constructor(name, lastName, email, password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
};

function catchInformation(){
    let name = document.getElementById("userName").value;
    let lastName = document.getElementById("userLastName").value;
    let email = document.getElementById("userEmail").value;
    let emailValid = document.getElementById("emailValidation").value;
    let password = document.getElementById("userPassword").value;
    let check = document.getElementById("checkAgree");
 
    if(email == "" || emailValid == "" || name == "" || lastName == "" || password == ""){
        window.alert("Verifique se há campos vazios")
    }else{
        if (validEmail(email,emailValid) && validCheck(check) && validPassword(password)){
            var user = new User(name,lastName,email,password);
            submitUser(user);
            window.alert("Conta criada com sucesso!");
        }else if(!validEmail(email,emailValid)){
            window.alert("É necessário um email válido ou os emails são diferentes");
        }else if(!validCheck(check)){
            window.alert("Você precisa aceitar os termos");
        }else{
            window.alert("Sua senha deve conter no mínimo 6 caracteres");
        }
    }

    
};



function submitUser(user){

    

    const URL = "http://localhost:5000/criarconta/newUser";
    const options = {method: "POST",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(user)
                    }           


    fetch(URL, options).then((res) =>{
        console.log(res)
        document.getElementById("userName").value = "";
        document.getElementById("userLastName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("emailValidation").value = "";
        document.getElementById("userPassword").value = "";
        
    });
}


function validPassword(password){
    if(password.length < 6){
        return false;
    }
    return true;
}

function validEmail(email, emailValid){
    var re = /\S+@\S+\.\S+/;

    if(!re.test(email) || !re.test(emailValid)){
        return false;
    }else if(email.toLowerCase() !== emailValid.toLowerCase()){
        return false;
    }else{
        return true;
    }
};

function validCheck(check){
    if(check.checked){
        return true;
    }else{
        return false;
    }
};