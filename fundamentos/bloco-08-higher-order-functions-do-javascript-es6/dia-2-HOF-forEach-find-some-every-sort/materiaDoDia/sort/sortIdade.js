// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// people.sort((personA, personB) => {
//   return personA.age - personB.age;
// });

// console.log(people);

//ORDEM DECRESCENTE

people.sort((personA, personB) => {
  return personB.age - personA.age;
});

console.log(people);