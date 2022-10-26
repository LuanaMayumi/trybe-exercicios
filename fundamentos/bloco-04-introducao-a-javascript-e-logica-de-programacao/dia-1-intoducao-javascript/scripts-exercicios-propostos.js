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

//EXERCICIO 4
// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let value = 0;

if (value > 0) {
    console.log('positive');
}
    else if (value < 0) {
        console.log('negative');
    }
        else 
        console.log('zero');
    

//EXERCICIO 5
// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.


const anguloUm = 40
const anguloDois = 40;
const anguloTres = -100;

if (anguloUm + anguloDois + anguloTres === 180) {
    console.log('true');
}
else if (anguloUm < 0 || anguloDois < 0 || anguloTres <0){
    console.log('Verifique os valore informados, algum deles é Inválido')
}
 else if (anguloUm + anguloDois + anguloTres !== 180) {
    console.log('false')
}

//EXERCICIO 6
// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let xadrez = 'Rei'; 

switch(xadrez.toLowerCase()){
    case'rei':
    console.log('Pode mover-se para qualquer direção, porém apenas uma casa por vez');
    break;

    case 'dama':
    console.log('Pode mover-se para qualquer direção, quantas casas quiser desde que estejam livres');
    break;

    case 'torre':
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal');
    break;

    case 'bispo':
    console.log('Move-se na diagonal, quantas casas quiser.');
    break;

    case 'cavalo':
    console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas.');
    break;
    
    default:
    console.log('Peça inválida');
    break;
    }

 //EXERCICIO 7
//  Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 74;


if(nota < 0 || nota > 100) {
    console.log('erro');
}
else if (nota >= 90) {
    console.log('Sua nota é A');
} 
else if (nota >= 80){
    console.log('Sua nota é B');
}
else if (nota >= 70) {
    console.log('Sua nota é C');
}
else if (nota >= 60) {
    console.log('Sua nota é D');
}
else if (nota >= 50) {
    console.log('Sua nota é E');
}
else {
    console.log('Sua nota é F')
} 

//EXERCICIO 8
// 8)
// 🚀 Há um par entre nós
// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

// Bonus: use somente um if.

const num1 = 16;
const num2 = 11;
const num3 = 13;

let numeroPar = false; //ja definido que a os numeros são impares e a variável é false

if (num1 % 2===0 || num2 % 2===0 || num3 % 2===0) {
  numeroPar = true; //muda a variável para true (se fosse const nao mudaria)
} 
console.log(numeroPar);

//EXERCICIO 9

const numero1 = 16;
const numero2 = 12;
const numero3 = 10;

let numeroImpar = false; //ja definido que a os numeros são impares e a variável é false

if (numero1 % 2!==0 || numero2 % 2!==0 || numero3 % 2!==0) {
  numeroImpar = true; //muda a variável para true (se fosse const nao mudaria)
} 
console.log(numeroImpar);

//EXERCICIO 10

const custoProduto = -27;
const valorVenda = 52;
const impostoSobreOCusto = 0.2;

let valorTotalDoCusto = custoProduto + (custoProduto * impostoSobreOCusto) // let impostoSobreOCusto = 20%
let lucro = valorVenda - valorTotalDoCusto
let vendas = 1000;

if (custoProduto < 0 && valorVenda <0) {
    console.log('O valor do lucro é de ' + lucro * vendas)
}
else {
    console.log('erro')  
}