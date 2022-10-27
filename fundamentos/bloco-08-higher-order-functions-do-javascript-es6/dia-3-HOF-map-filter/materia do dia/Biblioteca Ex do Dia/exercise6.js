const books = require('./booksToExport')

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const currentYear = new Date().getFullYear();
  // console.log(currentYear);
  return books.filter((book) => book.releaseYear < currentYear - 60).map((book) => book.name)
}
console.log(oldBooks());