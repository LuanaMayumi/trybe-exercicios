//1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length ; index += 1) {
    console.log(numbers[index]);
}

//2 - Some todos os valores contidos no array e imprima o resultado;
// explicando:

// let amora = 43;
// let uva = 1;

// amora = amora + uva ; ou seja: 43 = 43 + 1
// amora += uva

// console.log(amora);

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let SomaNumbers1 = 0;

for (let index = 0; index < numbers1.length; index += 1) {
    SomaNumbers1 += numbers1[index];
}
console.log(SomaNumbers1);

// 3 - Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumbers2 = 0;

for (let index = 0; index < numbers2.length; index += 1) {
    somaNumbers2 += numbers2[index]
}
let mediaAritmetica = somaNumbers2 / numbers2.length;
console.log(mediaAritmetica)

//EXERCICIO 4
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (mediaAritmetica > 20) {
    console.log('Valor maior que 20');
} else 
console.log('Valor menor ou igual a 20');

// 5) Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers2 = [5, 9, 3, 19, 70, 100, 8, 2, 35, 27];

let maiorValor = 0;

for (let index = 0; index < numbers2.length; index += 1) {
    if (numbers2[index] > maiorValor){
    maiorValor = numbers2[index];
}
}
console.log(maiorValor)

// 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numeros = [5, 9, 3, 19, 70, 100, 8, 2, 35, 27];

let numeroImpar = [];

for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 2!==0){
numeroImpar.push(numeros[index])

}
}
console.log(numeroImpar.length)

// 7) Utilizando for, descubra qual o menor valor contido no array e imprima-o;


let numerosL = [5, 1, 9, 3, 19, 70, 100, 8, 2, 35, 27];

let menorValor = numerosL [0];

for (let index = 0; index < numerosL.length; index += 1) {
    if (numerosL[index] < menorValor) {
    menorValor = numerosL[index];
}
}
console.log(menorValor)