const books = require('./Organizando.biblioteca')

function smallerName() {
  let nameBook;
  
    books.forEach((book) => {
     if (nameBook === ' ') {
        nameBook = book.name;//caso esteja vazio, guardar o nome do livro
     } else if (book.name.length < nameBook.length){ //caso o tamanho do nome do livro for menor do que o que esta armazenado no namebook
      nameBook = book.name;
     }
  });
  return nameBook;
  // Variável nameBook que receberá o valor do menor nome;
}
console.log(smallerName());