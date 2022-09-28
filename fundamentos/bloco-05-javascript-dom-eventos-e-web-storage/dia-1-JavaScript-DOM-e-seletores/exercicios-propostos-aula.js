function mudarOTexto(texto) {
  document.getElementsByTagName('p')[0].innerText='Texto de teste exercicio 1';
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
