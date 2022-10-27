1. Encontre o index através do valor de um elemento
Escreva um algoritmo que recebe 2 parâmetros:

Um array contendo um conjunto de números
O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:

"Elemento não encontrado no array"

2. Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n"

3. Números divisíveis por 3
Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:

"Há 50 ou mais números divisíveis por 3"

Caso o contrário: "Sequência muito pequena."

GABARITO:

//1

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let element = 3;

if (arrayNumbers.indexOf(element) >= 0) {
  console.log(arrayNumbers.indexOf(element));
} else {
  console.log('Elemento não encontrado no array');
}


//2 


let impar = [];

for (let index = 1; index <= 50; index += 1) {
  if (index % 2 == 1) {
    impar.push(index)
  }
}
console.log(impar);


// 3


let inicial = 80;
let final = 150
let contagem = 0;

for (let index = inicial; index <= final; index += 1) {
  if (index % 3 == 0) {
    contagem += 1;
  }
}
if (contagem < 50) {
  console.log('Sequência muito pequena.');
} else {
  console.log('Há 50 ou mais números diviseis por 3');
}