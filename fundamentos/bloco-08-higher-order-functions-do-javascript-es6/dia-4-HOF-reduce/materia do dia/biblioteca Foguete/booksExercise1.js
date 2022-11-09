const books = require('./books')


// Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc,book ) => 
    // console.log(book);
    `${acc} ${book.author.name},`
    , ' ');
  }//passar o valor inicial do acumulador, string '', objeto {}, conta 0, array [].
console.log(reduceNames());

