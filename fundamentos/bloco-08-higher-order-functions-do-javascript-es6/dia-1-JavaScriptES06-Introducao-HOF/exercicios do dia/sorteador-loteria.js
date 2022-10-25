// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const sorteio = (num, chamadaFunction) => {//2 - (numero 5 , função que vai checar = checarNumeroApostado)
  let numeroAleatorio = Math.floor((Math.random() * 5) + 1);//3- cria numero aleatorio
  console.log(numeroAleatorio);
  return chamadaFunction (num, numeroAleatorio);//4 - Faz a chamada, vai executar a function checarNumeroApostado, e depois retorna. Mas vai executar com o numero 5 e o numero Aleatorio. 
  //8 - retorno com o resultadoFinal.
};

const checarNumeroApostado = (num, numeroAleatorio) => {//5- crio uma função que vai receber o 5 e o numero aleatorio, que foram passados na linha 6
  let resultadoFinal;
  if (numeroAleatorio === num){ //6 - se o numero aleatorio é igual ao num ( parametro )
    resultadoFinal = `Parabéns você ganhou`;
  } else {
    resultadoFinal = `Tente novamente`;
  }
return resultadoFinal;//7 - retornando se o numero é ou nao igual ao sorteado
};
console.log(sorteio(2, checarNumeroApostado));// 1 - checar se o numero 5 é igual ao meu numero Apostado

//REFATORAR

const check = (num, numAleatorio) => num === numAleatorio; //função que vai verificar se o numero passado é igual ao aleatorio - retorna true ou false
const loteria = (num, callback) => {
  let numeroAleatorio = Math.floor((Math.random() * 5) + 1);//3- cria numero aleatorio
  return callback (num, numeroAleatorio) ? `${numeroAleatorio} Você ganhou!` : `${numeroAleatorio} Você perdeu!`;
}
console.log(loteria(2,check));
