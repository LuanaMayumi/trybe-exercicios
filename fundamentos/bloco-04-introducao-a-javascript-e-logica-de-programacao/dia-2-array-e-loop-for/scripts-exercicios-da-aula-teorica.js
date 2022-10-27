let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

// para acessar a quantidade de elementos em um array

let Lista = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = Lista[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = Lista[Lista.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

//Adicionar e remover itens de um array

let Lista2 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

Lista2.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(Lista2);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//Remover um item

let Lista3 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

Lista3.pop();  // remove a última tarefa
console.log(Lista3);

// [ 'Tomar café', 'Reunião' ]

//procurar o índice de um item no Array. > indexOf()

let Lista4 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = Lista4.indexOf('Reunião');
console.log(indexOfTask);

// 1

//Obtenha o valor “Serviços” do array menu: > ADICIONEI O MENU[1];

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Procure o índice do valor “Portfólio” do array menu: >> resposta: menu.indexOf('Portfólio')

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Adicione o valor “Contato” no final do array menu: >> menu.push('Contato')

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu2.push('Contato')
console.log(menu2);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//exemplo de for/of para somar valores:

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let elementos of names) {
    console.log(elementos);
}

const pessoas = ['Amanda', 'Bruna', 'Carla'];
const pessoaEscolhida = pessoas[2];
console.log(pessoaEscolhida);

//Para que 'Doom' seja substituído por 'Warcraft III', devemos substituir o valor de ? por:
const jogos = ['Doom', 'Skyrim', 'Final Fantasy'];
jogos[0] = 'Warcraft III';
console.log(jogos);

