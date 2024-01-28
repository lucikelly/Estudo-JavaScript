/* udsando um filtro no array
 var numeros = [1,2,3,4,5,6,7,8,9,10]

 var result = numeros.filter(item => item % 2 == 0)
 console.log(result)

 // outra formar de fazer 

var num = numeros.filter(
    function(valor){
        return valor > 5;
    }
)
console.log(num)

// mais uma forma seria 

function buscar(valores){
    return valores <5;
}
var num02 = numeros.filter(buscar);
console.log(num02)

// mais uma 
var r1 =numeros.filter((valor)=> {
    return valor != 5;
})
console.log(r1)

// mais outra
var r2 = numeros.filter(valor => valor > 4)
console.log(r2)

// usando objeto
var funcionario =[
    {nome: "marcos", idade : 15},
    {nome: "paulo", idade : 16},
    {nome: "eric", idade : 26},
]

var fun02 = funcionario.filter(
    function(valor){
        return valor.nome.length <5
    }
)
console.log(funcionario)*/

//usando map
var numeros = [1,2,3,4,5,6,7,8,9,10];
var nums = numeros.map(function(valor){
    return valor *3;
})
console.log(nums)

//reduce 
var tot = numeros.reduce(function (total, numero) {
    return total + numero
},0)
console.log(tot)