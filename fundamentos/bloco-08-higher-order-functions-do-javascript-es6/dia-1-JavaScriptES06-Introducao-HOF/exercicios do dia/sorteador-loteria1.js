// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const resultSorteio = (numApostado, callback) => {
  const randomNumber = Math.round(Math.random() * (6-1) +1);//random nao preciso passar parametro, ele vai dentro de round que arredonda o numero. Numero aleatório até 5, se for 0,4 arredonda pra 0. Pra isso nao acontecer soma + 1, pra arredondar pra 1
  callback(numApostado, randomNumber)//chamando a minha função verifyNumbers e passando os dois parametros
  // return randomNumber;
}

const verifyNumbers = (numApostado, randomNumber) => {
  const number = randomNumber;
  if (numApostado === number) {
    console.log(`Número sorteado: ${number} Resultado: Parabéns você ganhou`);
  } else {
    console.log(`Número sorteado: ${number} Resultado: Tente novamente`);
}
};
resultSorteio(5, verifyNumbers);//A função que preciso executar primeiro é a HOF que recebe o meu parametro verifYNumbers - Preciso passar como parametros os dois que foram passados na linha 3, mas dando um numero apostado