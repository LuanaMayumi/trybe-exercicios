const books = require('./booksToExport')

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// De olho na dica 👀: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWithLetterJOnName(letter) {
  const findingBook = books.find((book) => book.author.name.startsWith(letter))

  return findingBook.name;
}
console.log(authorWithLetterJOnName('J'));

//OUTRA RESOLUÇÃO

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
    .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName());