//Como listar as chaves desse objeto:

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

// for (const keys in coolestTvShow) {
//   console.log(keys);
// }

//O método Object.keys, como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array.

console.log(Object.keys(coolestTvShow));
console.log(Object.keys(coolestTvShow).includes('seasons'));



