const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Passando um valor default para a desestruturação de `nationality` sendo "Brazilian" então todo objeto que passarmos terá esse valor, caso não seja passado algum outro.

const getNationality1 = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person1 = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson1 = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality1(otherPerson1)); // Ivan is Russian
console.log(getNationality1(person1)); // João is Brazilian