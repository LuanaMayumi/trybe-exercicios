// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newPerson = (fullname) => {
    const email = fullname.toLowerCase().split(' ').join('_');
    return {fullname, email: `${email}@trybe.com`}
  };
  console.log(newPerson('Luana Gomes')); //chamando o console.log fora da função consigo capturar o retorno dela. Dentro eu nao conseguiria visualizar o return

const newEmployees = (callback) => {//o callback significa a função newPerson - a função que entra como parametro de uma HOF é o callback
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva '),
  };
  return employees;//o return é dentro da função, fora do objeto
};
console.log(newEmployees(newPerson));//pq preciso chamar essas funções nessa ordem? Pq newEmployees é uma HOF que recebe newPerson como parametro. 
//console.log mostra o meu return. To pedindo primeiro pra me dar o return de newPerson dentro do return de newEmployees

const nome = 'Luana Mayumi';
console.log(nome.split(' '));//o Split lê o caractere que foi passado como parametro, no momento que encontra o parametro, ele separa - Só utilizado em String, mas sempre retorna em Array
console.log(nome.toLocaleLowerCase()); // Só utilizado em string

const nomeSeparado = nome.split(' ')
console.log(nomeSeparado.join('----'));//o Join só funciona em Array, ele precisa saber como queremos concatenar o Array. Preciso passar o parametro dentro de string - o retorno será sempre em string
console.log(nome.replaceAll(' ', '_'));//replaceAll separa a string, e depois junta
console.log(nome.replaceAll('a', 'A'));//replaceAll funciona para trocas em string