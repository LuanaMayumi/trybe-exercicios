const books = require('./Organizando.biblioteca')

//Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947(year) {
  return books.find((book) => {
    return book.author.birthYear === year
  }).author.name;
}
// console.log(authorBornIn1947(1947));

//Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook;
  console.log(!nameBook);//uma variável vazia representa FALSE, a negação dessa variavel representa TRUE
  
    books.forEach((book) => {
     if (!nameBook) {
        nameBook = book.name;//caso esteja vazio, guardar o nome do livro
     } else if (book.name.length < nameBook.length){ //caso o tamanho do nome do livro for menor do que o que esta armazenado no namebook
      nameBook = book.name;
     }
  });
  return nameBook;
  // Variável nameBook que receberá o valor do menor nome;
}
// console.log(smallerName());

//Encontre o primeiro livro cujo nome possui 26 caracteres.

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

function getNamedBook(characters) {
  return books.find((book) => {
    return book.name.length === characters
  })
}
// console.log(getNamedBook(26));

//Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  return books.sort((obj1, obj2) => {
    return obj2.releaseYear - obj1.releaseYear
  })
}
console.log(booksOrderedByReleaseYearDesc());

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.


function everyoneWasBornOnSecXX(century) {
  return books.every((book) => {
    return book.author.birthYear > 1900 && book.author.birthYear <= century
  })
}
console.log(everyoneWasBornOnSecXX(2000));

//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s() {
  return books.some((book) =>
book.releaseYear >= 1980 && book.releaseYear <= 1989);
  }
console.log(someBookWasReleaseOnThe80s());

//Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.


function authorUnique() {
  return books.every((book) => 
   !books.some((bookSome) => 
   (bookSome.author.birthYear === book.author.birthYear)
   &&
   (bookSome.author.name !== book.author.name)));
  }
  console.log(authorUnique());
