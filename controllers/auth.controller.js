const { response } = require("express")

let dbAuth = [
    {   
        login : 'test',
        mdp:'mdp'
    }, 
    {
        login: 'test2',
        mdp:'mdp'
    }
]

const login = (body) => {
    let auth = false
    for (let i=0; i<dbAuth.length;i++){
        if(dbAuth[i].login == body.login && dbAuth[i].mdp == body.mdp ){
            auth = true
        }
    }
    return auth 
}

module.exports = {
    login
}