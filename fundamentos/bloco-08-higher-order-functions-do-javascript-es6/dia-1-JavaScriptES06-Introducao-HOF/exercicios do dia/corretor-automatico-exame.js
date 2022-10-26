// Corretor automático de exame

// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

//Vamos criar nossa callback. Ela deve verificar se a resposta do aluno está certa, errada ou inexistente, e assim atribuir a devida pontuação.
const compareAnswers = (arrayRespostasCorretas, arrayRespostasEstudante) => {
  if (arrayRespostasCorretas === arrayRespostasEstudante) {
   return 1;
  } else if (arrayRespostasEstudante === 'N.A' ) {
   return 0;
  } else{
   return -0.5;
  }
 };

const totalPontos = (arrayRespostasCorretas, arrayRespostasEstudante, callback) => {
 let counter = 0;
 for (let index = 0; index < arrayRespostasCorretas.length; index += 1) {//A cada iteração utilizaremos nossa callback. Como parâmetros utilizamos o index do loop para compararmos as respostas corretas com as do estudante.
  const callbackReturn = callback(arrayRespostasCorretas[index], arrayRespostasEstudante[index]);
  counter += callbackReturn;
 }
 return `Resultado final ${counter} pontos`;
};
console.log(totalPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

