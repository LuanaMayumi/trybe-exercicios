const numbers = [50, 85, -30, 3, 15];

//USANDO FOR

let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] > maiorNumero){
    maiorNumero = numbers[index];
  }
}console.log(maiorNumero);

//USANDO REDUCE

const numbers1 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers1.reduce(getBigger, 0);
console.log(bigger);