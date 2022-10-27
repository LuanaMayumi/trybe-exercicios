const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125, // energia esperitual
  damage: undefined,
};
const warrior = {
  healthPoints: 200,
  strength: 30, // força
  weaponDmg: 2, // força da arma
  damage: undefined, // 40
};
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};


const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragon) => {
  const danoDragon = Math.floor((Math.random() * (dragon - 15)) + 15)
  return danoDragon
}

const damageWarrior = (warrior) => {
  const danoWarrior = Math.floor((Math.random() * ( (warrior.strength * warrior.weaponDmg) - warrior.strength )) + 15)
  return danoWarrior
}

const damageMage = (mage) => {
  if (mage.mana < 15) {
    return `Não possui mana suficiente`
  }
  return {
    dano: Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence) + 15 )),
    mana: (mage) => {
      let mana = mage.mana
      return mana -15
    }
  }
};
console.log(damageMage(mage));

const gameActions = {
 turnoWarrior: (damageWarrior) => {
  dragon.healthPoints -= damageWarrior,
  warrior.damage = damageWarrior
 },
 turnoMage: (damageMage) => {//Crie a segunda HOF que compõe o objeto gameActions.
  dragon.healthPoints -= damageMage.dano, //subtraindo de helthPoints o valor do dano Mage
  mage.damage = damageMage.dano
  mage.mana -= damageMage.mana
 },
 turnoDragon: (damageDragon) => {// Crie a terceira HOF que compõe o objeto gameActions.
  mage.healthPoints -= damageDragon, //130 - 
  warrior.healthPoints -= damageDragon,
  dragon.damage = damageDragon
 },
 results: () => {// Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
  return battleMembers
 }
};

gameActions.turnoWarrior(damageWarrior)//essa função está sendo executada aqui
gameActions.turnoMage(damageMage)//essa função está sendo executada aqui
gameActions.turnoDragon(damageDragon)//essa função está sendo executada aqui
console.log(gameActions.results());















