//Utilize o reduce para transformar uma matriz em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
 return arrays.reduce((acc,array) => {//uso o reduce pra percorrer o array, mas dentro dele tenho outros arrays
  console.log(array);//me retorna todos os arrays
    array.forEach(item => {
    console.log(item);//me retorna só os itens
    console.log(typeof item);//nao tira a propriedade dos meus itens
      acc.push(item); //o acc que é um array vazio vai receber os items dos meus arrays
    });
    return acc;
 }, [])//preciso de um array vazio pra iniciar
}
console.log(flatten());



