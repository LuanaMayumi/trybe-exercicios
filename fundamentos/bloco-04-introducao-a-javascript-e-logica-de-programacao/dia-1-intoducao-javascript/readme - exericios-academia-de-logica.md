1. Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.

Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:

"x é a pessoa mais jovem e possui y anos de idade"

2. Taxa Metabólica Basal
Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo.

Ele recebe os seguintes dados:

age: número maior que 0
sex: M ou F
weight: Em (kg) com número maior que 0
height: Em (cm) com número maior que 0
A fórmula para homens:

(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:

(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:

"A taxa metabólica basal é: x Kcal"

3. Lanchonete da Trybe
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.

Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida.

Tabela:

"1 - Trybe Lanche Feliz"

"2 - McTrybe"

"3 - TrybeWooper"

"4 - X-Trybe"

"5 - Triplo Trybe com JS"

Caso a pessoa escolha uma opção inexistente, imprima no terminal:

"Ainda não possuímos esta opção :("


//RESPOSTAS:

/* Descubra a idade mínima */
let marinaAge = 20
let silviaAge = 30
let izaAge = 10

  if (marinaAge < silviaAge && marinaAge < izaAge) {
    console.log('Marina é a mais jovem e possui ' + marinaAge + ' anos de idade.'); 
  } else if (silviaAge < marinaAge && silviaAge < izaAge) {
   console.log('Marina é a mais jovem e possui ' + silviaAge + ' anos de idade.');
  } else {
    console.log('Marina é a mais jovem e possui ' + izaAge + ' anos de idade.');
  }



/* Taxa Metabólica Basal */

let age = 24
let sex = 'F'
let weight = 60
let heigh = 163

  let bmr;

  if (sex === 'M') {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 + 5;
  }

  if (sex === 'F') {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 - 161;
  }

  console.log('A taxa metabólica basal é: ' + bmr + ' Kcal') 



/*  01 - Lanchonete da Trybe */
let number = 4
  switch (number) {
    case 1:
      console.log('1 - Trybe Lanche Feliz');
      break
    case 2:
      console.log('2 - McTrybe');
      break
    case 3:
      console.log('3 - TrybeWooper');
      break
    case 4:
      console.log('4 - X-Trybe');
      break
    case 5:
     console.log('5 - Triplo Trybe com JS');
     break
    default:
      console.log('Não temos esta opção ainda :(');
  }

