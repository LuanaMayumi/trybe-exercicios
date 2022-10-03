function mudarOTexto(texto) {
  document.getElementsByTagName('p')[1].innerText='Onde eu me vejo daqui a dois anos?';
  } 
  mudarOTexto('texto');

  function changeBackground (colorBack){
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
  }
  changeBackground('colorBack');

  function changeBackground (colorBackDois){
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
  }
  changeBackground('colorBackDois');

  function correctingText (text) {
    document.getElementsByClassName('title')[0].innerText='Exercício - JavaScripit';
  }
  correctingText('text');


  // 5 ) Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

// 1 - criar uma variável
// 2 - capturamos a tag P na primeira posição
// 3 - innerHtml: pega tudo que é estrutura HTML dentro de Paragrafo, dentro de posição 1 ('p')[0]
// 4 - chamei a minha variável toUpperCase, reatribui usando a função toUpperCase

  function changingtext() {
let toUpperCase = document.getElementsByTagName('p')[0];
toUpperCase.innerHTML = toUpperCase.innerHTML.toUpperCase();
  }
  changingtext();


  // 6) Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

// 1 - atribui uma variavel
// 2 - capturei todas as tags P
// 3 - usei um for pra percorrer

function showingContent() {
  let exibindoConteudo = document.getElementsByTagName('p');
  for (let index = 0; index < exibindoConteudo.length; index += 1) {
    console.log(exibindoConteudo[index].innerHTML);
  }
}
showingContent();

  