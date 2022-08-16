const URL = "http://localhost:5000/"

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}


function userValidation (){
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;

    let user = new User(email,password)
    const options = {
        method: "POST",
        headers: new Headers ({"content-type": "application/json"}),
        body: JSON.stringify(user)
    }

    if(email == "" || password == ""){
        window.alert("Preencha todos os campos")
    }else{
        fetch(URL, options).then(res => {
            console.log(res)
            if(res.redirected == true){
                window.location.href = "http://localhost:5000/minha-conta";
            }else if(res.status == 400){
                window.alert("Email ou senha incorretos!");
            }
        })
    }
}