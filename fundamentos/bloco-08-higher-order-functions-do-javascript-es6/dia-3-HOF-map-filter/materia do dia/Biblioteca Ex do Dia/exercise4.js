const books = require('./booksToExport')

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
// De olho na dica 👀: use as funções filter e sort

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  return books.filter((book) => {
    const ageRelease = 2022 - book.releaseYear
    // console.log(ageRelease);
    return ageRelease >= 60
  }).sort((obj1, obj2) => obj2.id - obj1.id);
}
console.log(oldBooksOrdered(books));

//OUTRA OPÇÃO

function oldBooksOrdered() {
  const currentYear = new Date().getFullYear();//classe new date pra pegar a data de hoje. getFullYear() método que traz o ano atual
  return books.filter((book) => (book.releaseYear < currentYear - 60)//- calculo: pego o ano atual (2022), tiro 60 (1962), o ano de lançamento do livro tem que ser menos que 1962
  ).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear ); //ordenou do menor ano pro maior ano
}

console.log(oldBooksOrdered());