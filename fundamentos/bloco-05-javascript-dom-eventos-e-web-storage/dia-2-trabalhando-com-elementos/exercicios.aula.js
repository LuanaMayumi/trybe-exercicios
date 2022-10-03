// 1 - Acesse o elemento elementoOndeVoceEsta.

document.getElementById('elementoOndeVoceEsta')

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'purple';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let creatingText = document.getElementById('primeiroFilhoDoFilho')

creatingText.innerHTML = 'Texto de teste'

console.log(creatingText);

// 4 - Acesse o primeiroFilho a partir de pai.

//firstChild: retorna o primeiro nó filho.

document.getElementById('pai').firstChild //acessando o primeiro filho

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

document.getElementById('elementoOndeVoceEsta').nextSibling

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);


// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8 - Agora acesse o terceiroFilho a partir de pai.

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;