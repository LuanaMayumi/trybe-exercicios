const hq2 = {
  nome: 'Maria',
  idade: 26,
};

const sobrenome = {
  sobrenomeMaria: 'Silva',
};

const ultimoNome = {
  lastNameMaria: 'Santos',
};

//ASSIGN = ATRIBUIR - para juntar dois objetos. Qdo abro e fecho parenteses, o primeiro parametro a ser passado tem q ser o alvo. Pra onde vc quer mandar? O proxio valor é a fonte. Vc quer manar o que pro alvo?
console.log(Object.assign(hq2, sobrenome))

console.log(Object.assign(hq2, sobrenome, ultimoNome))//posso colocar quantos quiser no alvo

const ultimoNome1 = {
  lastNameMaria: 'Xablau',
};

console.log(Object.assign(hq2, sobrenome, ultimoNome1))//sobrescreve o valor quando tem a mesma chave

Object.assign(hq2, sobrenome, ultimoNome1)//existe a modificação no objeto
console.log(hq2);

//para criar um clone do objeto:
const xablau = Object.assign({},hq2); //deixar o alvo vazio

xablau.outra = 'oi';

console.log(xablau); //deixar o alvo vazio
