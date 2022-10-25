// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope =  `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}
testingScope(true);

////////////////EXERCICIO 2////////////////

// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

   for (let index = 1; index < oddsAndEvens.length; index += 1) {//3 - Segunda rodada: index = 2 (4)
    
     for (let index2 = 0; index2 < index; index2 += 1){//13 - Segunda rodada index 1 (3)
        if (oddsAndEvens[index] < oddsAndEvens[index2]){ //se 3 é menor que 13 - Segunda rodada: se 4 é menor que 3
          let numerosOrdenados = oddsAndEvens[index];//3
          oddsAndEvens[index] = oddsAndEvens[index2]//3 vai ser substituido por 13
          oddsAndEvens[index2] = numerosOrdenados//13 vai ser substituido por 3
        }
     }
   } 
return oddsAndEvens
}
console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente`); // será necessário alterar essa linha

//EXERCICIO 2 USANDO .SORT

const oddsAndEvens1 = [13, 3, 4, 10, 7, 2];

  oddsAndEvens1.sort(function(a,b){
    return a-b;
  });

console.log(oddsAndEvens1);

///ARROW FUNCTION///

const oddsAndEvens2 = [13, 3, 4, 10, 7, 2];

oddsAndEvens2.sort ((a,b) => {
return a-b;
});

console.log(oddsAndEvens2);

//PARTE 2 - EXERCICIO 1

const factorial = (numero) => { //se o número for 4://se eu der um numero como parametro, o FOR percorre todos os numeros que existem antes dele?

  let result = 1;//será o retorno final da função

  for (let index = 1; index <= numero; index += 1) {//só começo o index com 0 quando quero percorrer uma string, array, objeto (estrutura)
  result = result * index
  
}
return result;
}
const numeroFatorial = factorial(10)
console.log(`Esse é o fatorial ${numeroFatorial}`);

//ESTRUTURA EM 1 LINHA

const factorial2 = (number) => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(4)); 
//1 - criei uma função com o parametro number
//2 - pergunta se o number é maior que 1
//3 - Se sim, vai multiplicar o proprio number por number - 1 (numero anterior)