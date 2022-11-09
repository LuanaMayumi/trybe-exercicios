const pessoa = {
  nome: 'Luana',
  idade: '31',
  cidade: 'São Paulo',
}

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe
}

console.log(pessoaTryber);

//espalha todas as propriedades dos dois objetos em uma cópia, sem alterar a estrutura do objeto original

const pessoaTryber2 = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'corrida',
}

console.log(pessoaTryber2);