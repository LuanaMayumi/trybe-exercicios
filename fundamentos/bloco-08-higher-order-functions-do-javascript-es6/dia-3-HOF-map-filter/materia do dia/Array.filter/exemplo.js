const array = ['Ana', 'Pedro', 'Giovana'];

array.filter((name) => console.log(name)); //percorre o elemento mostrando um a um

array.filter((element, index, array) => console.log('Nome:', element, 'Índice:', index, 'Array:', array));//mostra o nome, o índice e o array completo

// comparar cada elemento que estiver iterando e ver se é verdadeiro

const filtered = array.filter((name) => name === 'Ana');
console.log(filtered);