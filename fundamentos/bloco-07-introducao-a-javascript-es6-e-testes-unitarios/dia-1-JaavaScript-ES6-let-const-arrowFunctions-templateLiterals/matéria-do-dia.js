// Agora experimente mover o console.log(userEmail) para fora da função e a execute novamente.
// O que aconteceria se trocássemos o let por var e const? Não deixe de fazer esse teste! Você verá, que nos três casos, não temos acesso à variável fora do escopo da função userInfo.

function userInfo() {
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();

// Nesse exemplo, temos acesso à variável userAge dentro e fora do bloco de código. Experimente trocar o var por let e const.
// Temos acesso à variável declarada com o var dentro e fora do escopo do bloco. No entanto, não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável. 

if (true) {
  // inicio do escopo do if
  var userAge = '20';//declarar variaveis usando VAR, pode vazar a info qdo é chamada fora de condicionais
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

// o const é imutável - ao declarar const favoriteLanguage = 'Javascript', o valor de favoriteLanguage não pode ser alterado

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto.

const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro


//////////////////////TEMPLATE LITERALS/////////////////////////////

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

////////////////// ARROW FUNCTION ////////////////////

const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

const printName = () => 'Lucas';
console.log(printName());

///ARROW FUNCTION COM OBJETOS:

function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joaquim', 25));

const objetoPessoa1 = (nome,idade) => ({nome: nome, idade: idade});
console.log(objetoPessoa1('Joaquim', 25));

///TERNARY OPERATOR

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// Situação em que é mais simples usar o operador ternário:

let idade = 21;

if (idade >= 18){
  console.log('Pode dirigir!');
} else {
  console.log('Não pode dirigir!');
};

/// (condição) ? 'valor se verdadeiro' : 'valor se falso'

const verificaIdade = (idade >= 18) ? 'Pode dirigir!' : 'Não pode dirigir!';
console.log(verificaIdade);

//apenas ua condição do IF sem o ELSE, usando o operador &&

let idade2 = 22;

console.log(idade2 >= 18 && 'Você ja pode ter a carteira de motorista');