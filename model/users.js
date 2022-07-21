module.exports = {
    users: [],

    newUser(id, name,lastName,email,password){
        this.users.push({id,name,lastName,email,password});

    },
    userShow(){
        return this.users;
    }

}