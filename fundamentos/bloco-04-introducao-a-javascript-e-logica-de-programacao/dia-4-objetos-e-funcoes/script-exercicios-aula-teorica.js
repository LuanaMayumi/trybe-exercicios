//OBJETOS

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

//   console.log(car.type);
console.log(car['type']);

  let diasSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
//   diasSemana.1; // SyntaxError: Unexpected number
  console.log(diasSemana['1']); // domingo

//Nesse exemplo, a chave banco do objeto conta guarda um outro objeto:

  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

  //Nesse exemplo, a chave banco do objeto conta guarda um outro objeto,:

  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  //Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto? 

  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

  let name = 'Marta';
  let lastName = 'Silva';
  let age = 34;
  let medals = { golden: 2, silver: 3 };

  let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: {
    golden: 2,
    silver: 3,
}
  }
  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

  player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; // Ao tentar acessar uma chave inexistente o JavaScript automaticamente irá criar essa chave.

  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes: ' + player.bestInTheWorld);

  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

  console.log(player['bestInTheWorld'].length);

  //FOR IN dentro de arrays

  let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

//ITERAÇÃO nas chaves dentro de um objeto

let carro = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in carro) {
    console.log(index, carro[index]);
  }

  //DIFEENÇA entre for in e for of

  let food = ['hamburguer', 'bife', 'acarajé'];

  for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

  let foods = ['hamburguer', 'bife', 'acarajé'];
for (let value of foods) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;


//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    console.log('Olá ' + names[key])
  }

  //Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

  let carros = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in carros) {
    console.log(key, carros[key]);
  }