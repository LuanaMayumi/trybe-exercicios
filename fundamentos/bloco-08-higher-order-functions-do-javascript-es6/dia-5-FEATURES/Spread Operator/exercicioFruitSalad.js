// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melancia', 'Kiwi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mamão', 'Maçã', 'Banana'];

const fruitSalad = (fruit, additional) => {
 return [...specialFruit,...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));