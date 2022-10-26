Quando estiver escrevendo um algoritmo, sempre responda às seguintes perguntas:

Eu resolvi o problema?
Havia outras maneiras de resolver o problema?
A maneira que eu escolhi foi a mais eficiente possível?
Seria possível inverter ou retirar algum passo?
Se eu fosse um computador, conseguiria entender todas as instruções?



// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

A resolução do problema acontece em 3 etapas:

Interpretação;
Criação do algoritmo;
Codificação do algoritmo.

Analisando o enunciado, sabemos que:

> devemos utilizar o array fruits;
> o termo “percorra“ indica uma estrutura de repetição, ou loop;
> “somando todos os valores“ mostra que devemos ter uma variável que guarda o valor da soma dos valores;
> o termo “caso“ indica uma estrutura condicional, ou if;
> “imprima o valor final“ indica um console.log;


BABY STEPS:


1 Adicionar o array;

let fruits = [3, 4, 10, 1, 12];

2 Criar uma variável com valor 0;

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

3 Criar um loop que percorre o array;

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {

}

4 Incrementar a variável com o valor correspondente a cada loop;

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

5 Criar um if com a condição de a variável ser maior que 15;


let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {

} else {

}

6 Caso a variável obedeça à condição: 7 Imprimir a variável

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if(sum > 15) {
  console.log(sum);
} else {

}



8 Caso não obedeça à condição: 9 Imprimir a mensagem “valor menor que 16”.

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}
