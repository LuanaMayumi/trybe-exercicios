const listaDeAprovados = [
  'luana@teste.com',
  'mayumi@teste.com',
  'tamura@teste.com'
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso`);
};

listaDeAprovados.forEach((item,posicao, array) => {//pega a variavel e chama o forEach, que pede uma função que precisa de pelo menos um parametro (máximo 3 parametros)
  enviarEmail(item);
  console.log(`Sua posição é a de: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
})


