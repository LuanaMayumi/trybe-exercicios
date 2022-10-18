////////////////TRY/CATCH

//funcao criada com dois parametros que ira retornar a soma entre eles

const sum = (value1, value2) => value1 + value2;
console.log(sum(5,90));

//a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos, tentou adaptá-los para que o código não quebrasse - no caso, o primeiro parâmetro foi convertido para uma string

const sum2 = (value1, value2) => value1 + value2;
console.log(sum2(10,'5'));

// Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a sua calculadora.

const sum3 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum3(2,'3'));

//Na prática, a função sum está retornando uma string, e esse não é o objetivo de uma função que soma dois números, certo? Você precisa indicar de alguma forma que ocorreu um erro.

//Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw:


const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum5 = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};
console.log(sum5(2,'3'));

/////OUTRO EXEMPLO

const verificaValores = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number'){//a funca verifica se os valores sao numeros,
    throw new Error('Erro! Os valores precisam ser numericos') //se um deles nao for numerico, o lançamento de um erro vai acontecer atraves da palavra reservada THROW, o new é usado para criar um novo objeto chamado ERROR. Error representa um erro. como foi chamado atraves de New, é criado uma cópia de erro
  }
}
// console.log(verificaValores(5, '5'));

const soma = (a, b) => {
  try{ //responsavel por executar o codigo e caso ocorra algum tipo de problema a execução para e o CATCH entra em ação
    verificaValores(a, b);
    return a + b;//a soma só vai ser realizada após a função VERIFICA VALORES
  }
  catch (erro) {//caso algum problema aconteça , o CATCH é usado
  return erro.message; //.message é uma propriedade do erro pra ver qual é a msg de erro que foi retornada
  }
}
// console.log(soma(5,'5'))
console.log(soma(5,'2'))