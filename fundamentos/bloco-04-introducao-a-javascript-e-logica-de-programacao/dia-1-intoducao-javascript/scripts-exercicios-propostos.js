//EXERCICIO 1:

const a = 2;
const b = 6;

let adição = a + b;
console.log(adição)

let subtração = a - b;
console.log(subtração)

let muntiplicação = a * b;
console.log(muntiplicação)

let divisão = a / b;
console.log(divisão)

let módulo = a % b;
console.log(módulo)

//EXERCICIO 2:

const valor1 = 13;
const valor2 = 12;

if (valor1 > valor2) {
    console.log('o valor ' + valor1 + ' é maior') //concatenar strings
} else {
    console.log('O valor 2 é maior');
}

//EXERCICIO 3
const valorUm = 2394;
const valorDois = 284;
const valorTres = 0;

if (valorUm > valorDois && valorUm > valorTres) {
    console.log('O valor ' + valorUm + ' é o maior!')
    }
else if (valorDois > valorUm && valorDois > valorTres) {
    console.log('O valor ' + valorDois + ' é o maior!')
}
else console.log('O valor ' + valorTres + ' é o maior!')








let angulo1 = 100;
let angulo2;
let angulo3;

//a soma deve ser 180 graus


// if (angulo1 + angulo2 + angulo3 === 180){
//     console.log('true');
//     }
//     else {
// console.log('false');    
//     }


const anguloUm = 23;
const anguloDois = 53;
const anguloTres = -100;

let gru = anguloUm > 0 && anguloDois > 0 && anguloTres > 0

if (gru){
    console.log('erro');
} else if (anguloUm + anguloDois + anguloTres !== 180) {
    console.log('false')
} else if (anguloUm + anguloDois + anguloTres === 180) {
    console.log('true');
}
10 > 0
//msg de erro é ponto primario

// console.log(anguloUm - anguloDois - anguloTres);

