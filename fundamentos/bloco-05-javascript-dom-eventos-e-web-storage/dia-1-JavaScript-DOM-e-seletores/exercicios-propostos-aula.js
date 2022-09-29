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


  //Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

  function changingText(maiusculo) {
    document.getElementsByTagName('p')
  }