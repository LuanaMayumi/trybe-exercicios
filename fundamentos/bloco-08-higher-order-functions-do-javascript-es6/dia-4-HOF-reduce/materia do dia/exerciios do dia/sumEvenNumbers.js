const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
//[18, 4, 76, 54]

const sum = evenNumbers.reduce((acc, curr) => {
console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
//1 iteração accumulator = 18, current = 4
//2 iteração accumulator = 22, current = 76
//3 iteração accumulator = 98, current = 54

return acc + curr;
});

console.log(`O valor total da soma dos numeros pares é: ${sum}`);

//OUTRA RESOLUÇÃO

const getEven = (number) => number % 2 === 0;
const sumPair = (accumulator, number) => accumulator + number;

const sumNumbers = (array) => array.filter
(getEven).reduce(sumPair);

console.log(sumNumbers(numbers));
