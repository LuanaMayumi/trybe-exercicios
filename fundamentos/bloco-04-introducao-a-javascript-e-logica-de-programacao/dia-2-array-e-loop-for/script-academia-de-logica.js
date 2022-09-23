let numeros = [1,5,8,34,23,98];

let valorElemento = numeros[0];
let resultado = 'valor nao encontrado'

for (let index = 0; index < numeros.length; index += 1) {

if (valorElemento === numeros[index]) {
    console.log('eu sou o index ' + index + ' numero ' + numeros[index])
    resultado= 'valor encontrado'
}
}
console.log(resultado);

let numerosImpares = [];

for (let index = 1; index <= 50; index +=1 ){
if (index % 2 !== 0) {
numerosImpares.push(index)
}
}
console.log ('os numeros ímpares são: ' + numerosImpares)


