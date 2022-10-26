function sum (num1, num2) {
  return num1 + num2;
}

const sumVariable = sum;
console.log(sumVariable);

const sum = (number1, number2) => {
  return number1 + number2;
};
//Funções de primeira classe

//Passar funções como argumento para outras funções:

const sayHello = () => {
  return ('hello trybers');
}
const printGreeting = (callback) => {
  console.log(callback());
}
printGreeting(sayHello);

//Retornar uma função de outra função:

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const inittialSum = sumFixAmount(15)
console.log(inittialSum(5));

//HOFs

//As Higher Order Functions ou HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las. 

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
// repeat(5, console.log);

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

//RETORNA SE O NUMERO É PAR OU IMPAR

const isEven = (number) => {
  if (number % 2 === 0){
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven);
repeat(3, isOdd);

//RETORNA UM NUMERO ALEATORIO ATÉ 100

const numberGenerator = () => {
  return Math.random() * 100;
}
console.log(numberGenerator());

//HOF - Utilizar uma função como parametro

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(15,5); // a função calculator recebe func como parametro que é outra função. a função func recebe dois numeros como parametro
console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(mult));
console.log(calculator(div));