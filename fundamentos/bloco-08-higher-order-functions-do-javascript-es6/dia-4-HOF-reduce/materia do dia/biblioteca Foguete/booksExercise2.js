const books = require('./books')

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
  const booksLength = books.length
  // console.log(booksLength);

  return books.map((book) => {
    return book.releaseYear - book.author.birthYear
  }).reduce((idadeMedia, idade) => {
    // console.log(idadeMedia);
    return idadeMedia + idade / booksLength
  }, 0)
  // escreva seu código aqui
}
console.log(averageAge());