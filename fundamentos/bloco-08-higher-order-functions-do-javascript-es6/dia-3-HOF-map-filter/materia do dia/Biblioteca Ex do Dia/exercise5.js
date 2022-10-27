const books = require('./booksToExport')

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return booksFiccaoCientifica = books
  .filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  .map((book) => book.author.name)
  .sort();
};
console.log(fantasyOrScienceFictionAuthors(books));

//RESOLUÇÃO USANDO INCLUDES()

function autoresDeFantasiaEFiccaoCientifica() {
  const generos = ['Fantasia', 'Ficção Científica'];//array contendo os generos que quero selecionar
  return books
  .filter((book) => generos.includes(book.genre))//a cada iteração, pega um book e verifica se o genero esteja incluido no array GENEROS. a função includes retorna true ou false
  .map((book) => book.author.name)//pega cada um dos livros , pega o nome do auto e transforma em um novo array
  .sort();
  };
  console.log(autoresDeFantasiaEFiccaoCientifica());

  //FUNÇÃO CRIADA SÓ PARA FILTRAR OS LIVROS DOS GENEROS:

function filteredBooks() {
  const generos = ['Fantasia', 'Ficção Científica'];//array contendo os generos que quero selecionar
  const filteredBooks = books//CONST criada somente para ver os livros filtrados de acordo com o genero
  .filter((book) => generos.includes(book.genre));//a cada iteração, pega um book e verifica se o genero esteja incluido no array GENEROS. a função includes retorna true ou false
  console.log(filteredBooks);//chamando a CONST criada somente para verificar o código
};
  filteredBooks();
    

