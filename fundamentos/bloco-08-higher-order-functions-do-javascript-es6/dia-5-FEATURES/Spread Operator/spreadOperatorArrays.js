const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = [...carros, ...motos];//espalha os valores de acordo com a ordem colocada

console.log(veiculos);

const veiculos2 = ['Uno', ...carros];//adicionando um novo valor

console.log(veiculos2);


//OUTRO EXEMPLO

const spring = ['OUT', 'NOV', 'DEZ'];//primavera
const summer = ['JAN', 'FEV', 'MAR'];//verao
const fall = ['ABR', 'MAI', 'JUN'];//outono
const winter = ['JUL', 'AGO', 'SET'];//inverno

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);