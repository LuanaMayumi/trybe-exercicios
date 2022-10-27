const books = require('./booksToExport')

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
    .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName());