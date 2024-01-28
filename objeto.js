// criando objetos
var pessoa = {
    nome : 'Luci',
    sobrenome: 'Santos'
}

console.log(pessoa['sobrenome'])

var pessoa1 = new Object();
pessoa1.nome = "Angela";
pessoa1.sobrenome = "Brito";
pessoa1.falarnome = function(){
    console.log("Nome é :" + this.nome)
}
//imprime o objeto pessoa
//console.log(pessoa1.nome)
pessoa1.falarnome()

function criar (nome, sobrenome){
    return {nome,sobrenome}
}

var p1 = criar("pedro", "jorge")
var p2 = criar("victor","sena")

console.log(p1)
console.log(p2)
