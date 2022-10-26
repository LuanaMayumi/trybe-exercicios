// const numbers = [19, 21, 22, 30, 3, 45, 15];

const verifyEven = () => {
return numbers.find((number) => {
return number % 2 === 0
});
};
console.log(verifyEven());

//JEITO SIMPLIFICADO

const verifyEven2 = () => {
  return numbers.find((number) => number % 2 === 0);
};
console.log(verifyEven2());

// OUTRO EXEMPLO

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyDiv3e5 = () => {
  return numbers.find((number) => {
    return number % 3 === 0 && number % 5 === 0;
  });
};
console.log(verifyDiv3e5());

//SIMPLIFICADO

const numbers1 = [19, 21, 30, 3, 45, 22, 15];

const verificaDivisivelPor3e5 = () => {
  return numbers1.find((number) => number % 3 === 0 && number % 5 === 0);
};
console.log(verificaDivisivelPor3e5());

//OUTRO EXEMPLO

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findName5Letters = () =>{
  return names.find((name) => {
    return name.length === 8;
  });
};
console.log(findName5Letters());

const findNameWith4Letters = () => {
  return names.find((name) => name.length === 4);
};
console.log(findNameWith4Letters());

//EXEMPLO

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findId31031687 = (id) => {
  return musicas.find((music) => {
    return music.id === id
  });
};
console.log(findId31031687('31031687'));

const musicas1 = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusic = (id) => {
  return musicas1.find((music) => music.id === id)
}
console.log(findMusic('31031685'));