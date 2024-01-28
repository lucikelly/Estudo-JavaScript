class Dispo{
    constructor(nome){
        this.nome = nome
        this.ligado =  true

    }
    ligar(){
        if(this.ligado){
            console.log("já está ligado")
            return
        }
        this.ligado = true
    }
}

class Iphone extends Dispo{
    constructor(nome, cor , modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

var i1 = new Iphone("11"," preto", "pro")
console.log(i1)
i1.ligar
i1.ligar
i1.ligar
