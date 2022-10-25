const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

// const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDoDragao = (dragon) => {
const min = 15;
const max = Math.floor(Math.random() * dragon.strength);
const dragon = max > min ? max : min;
return dragon
}
console.log(danoDoDragao(dragon));

// const dragonCard = (dragon) => {
//  const danoDragon = Math.floor((Math.random() * (dragon - 15)) + 15);
//  return danoDragon;
// }
// console.log(dragonCard(dragon.strength));

//Crie uma função que retorna o dano causado pelo warrior.
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const danoGuerreiro = (warrior) => {
const min = warrior.strength;
const aqui = min * warrior.weaponDmg;
const max = Math.floor(Math.random() * aqui);
const warriorGame = max > min ? max : min;
return warriorGame;
}

// const warriorCard = (warrior) => {     0,50   *   ((30     *      2)                   -   30) +    15
// const danoWarrior = Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + 15)
// return danoWarrior
// }

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0.

const danoMago = (mage) => {
  const min = mage.intelligence;
  const max = min * 2;
  const mana = mage.mana; //chave dentro do obj
  const damage = Math.floor(Math.random() * (max - min +1) + min);
  const vida = {//a cada if, vai ter uma manipulação desse objetov
    manaZerada: 0,
    demageNada: 'Não possui mana suficiente'
  }
  if (mana >= 15) {
    vida.manaZerada = 15;
    vida.demageNada = damage;
    return vida;
  }
  return vida;
}
console.log(danoMago(mage));