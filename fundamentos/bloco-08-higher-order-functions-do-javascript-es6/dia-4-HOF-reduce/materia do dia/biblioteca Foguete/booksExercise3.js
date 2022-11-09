const books = require('./books');

// Encontre o livro com o maior nome.


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  books.filter((book) => (book.name.length < book.name.length) ? book.name=book.name : book.name).reduce((acc, curr) => acc < curr ? acc = curr : curr
  )}
console.log(longestNamedBook());