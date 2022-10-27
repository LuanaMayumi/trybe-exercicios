//Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  return number % 3 === 0 && number % 5 === 0;
};
const div5and3 = numbers.find(findDivisibleBy3And5);

console.log(div5and3);

//SEGUNDA OPÇÃO

const findDivisibleBy3And51 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
};
console.log(findDivisibleBy3And51());