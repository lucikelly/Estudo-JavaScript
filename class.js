//criando class no javascript
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("olá " + this.nome)
    }

    get nometot(){
        console.log("olá " + this.nome + " "+ this.sobrenome)
    }
}

p1 = new Pessoa("lucikelly","santos")
p1.falar()
p1.nometot