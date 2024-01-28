/*var valores =[8,5,9,3,4,];
console.log(valores[2]);

for (var pos = 0; pos<valores.length; pos++){
    console.log("Posição: "+ pos + " valor: " + valores[pos])
}

var carros =[];
carros[0]= "gol";
carros[1]= "Toyota";

var motos = new Array("BMW","YAMAHA","HONDA");

motos.forEach(function(item, indice, array){
    console.log(item, indice);
});

// Calcular a media de todos os numeros de um array

var valores = [5,8,8,8,8];
var soma = 0;
for (var pos = 0; pos< valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;
console.log(media);

//investir um array
var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Array investido: " + numeros.reverse())
//usar o separadores
console.log(numeros.join('|'))
// retirar o primeiro elementos do array
var retirado = numeros.shift();
console.log("O número retirado foi: "+retirado)
console.log(numeros)
console.log("posição do número 7: " + numeros.indexOf(1))

//acrescentar um item no array
numeros.push(20)
console.log(numeros)
//remove o ultimo item
numeros.pop()
console.log(numeros)

//trirar um element de forma mais especifica

var arr2 = [1,2,3,4,5,6,7];
arr2.splice(4,2)

console.log(arr2)

// para fazer uma substituição
var nomes = ["maria", " jorge", " victor"]
var novos = nomes.splice(0,1,"yago")
console.log(nomes)

// criar mais um elemento no array
var pai = ["Brasil ", " chile"]
pai.unshift("Argentina")
console.log(pai)*/

// splice faz a mesma coisa, porém ele não modifica o array em sim, e sim o outro 
var pessoas =["mario " , "julio", "tiago"]
var gerente =["davi" , "marcos"]
var pessoasmodificadas = pessoas.slice(1,2)
console.log(pessoas)
console.log(pessoasmodificadas)

//juntar arrays
var empressa = pessoas.concat(gerente)
console.log(empressa)

