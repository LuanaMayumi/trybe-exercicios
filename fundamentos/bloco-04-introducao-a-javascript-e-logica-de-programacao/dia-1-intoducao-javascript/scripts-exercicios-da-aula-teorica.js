// const myName = "Luana";
// const birthCity = "São Paulo"
// let birthYear = 1991

// // console.log(myName, birthCity, birthYear);
// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030;

// console.log(birthYear);

// birthCity = 'Paraíba';

// console.log(birthCity);

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

const base = 5;
const heigth = 8;
const area = base * heigth;
const perimeter = base + heigth + area;

console.log(area);
console.log(perimeter);

const nota = 72;

if (nota >= 80) {
    console.log("Parabéns!");
} else if (nota < 80 && nota >= 60) {
    console.log('Voce esta na nossa lista de espera');
} else if (nota < 60) {
    console.log('Voce foi reprovado');
}

const comida = 'pao na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const currentHour = 12;
let message;

if (currentHour >= 22){
message = 'Não deveriamos comer nada, é hora de dormir';
} 
else if (currentHour >=18 && currentHour < 22){
message = 'Rango da noite, vamos jantar :D';
} 
else if (currentHour >= 14 && currentHour < 18 ) {
message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11 && currentHour <= 14) {
    message = 'Hora do almoço';
}
else if (currentHour >=4 && currentHour <= 11) {
    message = 'Hmm, cheiro de café recém-passado';
}

console.log(message);


const bebidaPrincipal =  'coca';
const bebidaAlternativa = 'suco';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

let weekDay = 'sábado';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feia' || weekDay === 'quarta-feira'|| weekDay === 'quinta-feira'|| weekDay === 'sexta-feira'){
    console.log('Mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido UwU');
}

console.log((2 + 2) === 4);

console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false


// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.

let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

    console.log('Consulte a classificação do filme');
    // Quando a pessoa for adolescente essa será a mensagem impressa no console.

    break;
    
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta

    console.log('A pessoa adulta é classificada para assistir qualquer filme')
    //caso seja adulto essa mensagem deverá aparecer no terminal

    break;
    // Interrompemos o fluxo novamente caso a pessoa seja adulta
    case 'idoso':
      // Repetimos o mesmo processo para o case "idoso"
      console.log('A pessoa idosa é classificada para assistir qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
    // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('só pode assistir filmes livres');
    // note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não precisamos interromper o funcionamento do mesmo.
}

let statusCandidato = 'Aprovado';

switch (statusCandidato) {
    case 'Aprovado':
    console.log('Parabéns, você foi aprovada(o)!');
    break;

    case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

    case 'reprovada':
    console.log('Você foi reprovada(o)');
    break;

    default: 
    console.log('Informação incorreta');
    }