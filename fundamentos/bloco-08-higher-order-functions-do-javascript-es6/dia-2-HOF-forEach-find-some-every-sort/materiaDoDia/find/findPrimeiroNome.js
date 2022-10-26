//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Maria', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => { 
    return name.length === 4})
};

console.log(findNameWithFiveLetters());

//JEITO SIMPLIFICADO


const names1 = ['João', 'Maria', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters1 = () => {
  return names1.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters1());

