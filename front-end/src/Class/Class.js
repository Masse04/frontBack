export class  nTask {
    constructor(task = '', user = '') {
    this.task = task ;
    this.user = user ;
}
}
export class nUser {
    constructor(nom = '', prenom = '' ,username = '' , email = '' , password = '') {
        this.nom = nom ;
        this.prenom = prenom ;
        this.username = username ;
        this.email = email ;
        this.password = password ;
    }
}
export class Client {
    constructor(username = '' , password = '') {
        this.username = username ;
        this.password = password ;
    }
}