const multiply = (number, value) => {
  // Escreva aqui a sua função
};

console.log(multiply(8));

// Caso não seja passado um valor para value ele agora assumirá o valor padrão de 1.
const multiply1 = (number, value = 1) => number * value;

console.log(multiply1(8));