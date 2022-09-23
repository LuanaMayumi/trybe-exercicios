//1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length ; index += 1) {
    console.log(numbers[index]);
}

//2 - Some todos os valores contidos no array e imprima o resultado;
// explicando:

// let amora = 43;
// let uva = 1;

// amora = amora + uva ; ou seja: 43 = 43 + 1
// amora += uva

// console.log(amora);

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let SomaNumbers1 = 0;

for (let index = 0; index < numbers1.length; index += 1) {
    SomaNumbers1 += numbers1[index];
}
console.log(SomaNumbers1);

// 3 - Calcule e imprima a média aritmética dos valores contidos no array;

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
