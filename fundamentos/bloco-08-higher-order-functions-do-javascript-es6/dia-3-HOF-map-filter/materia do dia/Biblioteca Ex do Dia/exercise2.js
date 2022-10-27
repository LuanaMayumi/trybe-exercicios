const books = require('./booksToExport')
// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
// De olho na dica 👀: use as funções map, sort

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  return books.map((book) => {//cria um outro array em cima do meu array books
    const ageBook = book.releaseYear - book.author.birthYear
    return {
    age: ageBook,
    author: book.author.name
    }
  }).sort((obj1, obj2) => obj1.age - obj2.age);
}
console.log(nameAndAge());