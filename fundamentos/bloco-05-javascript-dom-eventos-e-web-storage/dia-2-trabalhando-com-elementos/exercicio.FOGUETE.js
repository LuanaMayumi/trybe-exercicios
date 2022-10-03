
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

// 1 ) Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;

let addingH1 = document.createElement('h1'); //Adicione a tag h1 
addingH1.innerHTML = 'Exercício - JavaScript DOM'; //om o texto Exercício - JavaScript DOM
document.body.appendChild(addingH1); //como filho da tag body;

// 2) Adicione a tag main com a classe main-content como filho da tag body;

let addingTagMain = document.createElement('main'); //Adicione a tag main 
addingTagMain.className = 'main-content'; //com a classe main-content
document.body.appendChild(addingTagMain); //como filho da tag body;

// 3) Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let addindTagSection = document.createElement('section'); //Adicione a tag section 
addindTagSection.className = 'center-content'; //com a classe center-content
addingTagMain.appendChild(addindTagSection); //como filho da tag main criada no passo 2;


// 4) Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let addingTagP = document.createElement('p');//Adicione a tag p 
addingTagP.innerHTML = 'Algum texto'; //coloque algum texto;
addindTagSection.appendChild(addingTagP); //como filho do section criado no passo 3 


// 5) Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let addindOtherTagSection = document.createElement('section');
addindOtherTagSection.className = 'left-content';
addingTagMain.appendChild(addindOtherTagSection);


// 6) Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let anotherTagSection = document.createElement('section');
anotherTagSection.className = 'right-content';
addingTagMain.appendChild(anotherTagSection);


// 7) Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let addingImage = document.createElement('img') //Adicione uma imagem
addingImage.className = 'small-image'; //classe small-image. 
addingImage.src = 'https://picsum.photos/200'; //com src configurado para o valor https://picsum.photos/200 
addindOtherTagSection.appendChild(addingImage); //Esse elemento deve ser filho do section criado no passo 5;


// 8) Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let elementUl = document.createElement('ul'); //Adicione uma lista não ordenada 

anotherTagSection.appendChild(elementUl); //Primeiro eu preciso criar a UL, pra depois criar as LIs 

let numerosPorExtenso = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'] //array com numeros por extenso

for (let index = 0; numerosPorExtenso.length; index += 1) {
    let creatingLis = document.createElement('li'); //criando as LIs
    creatingLis.innerHTML = numerosPorExtenso[index]; //atribuindo os numeros por extenso nas LIs
    elementUl.appendChild(creatingLis);//colocando as LIs na UL
   }
   



// 9) Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3 ; inde += 1){

    let addingTagsH3 = document.createElement('h3');
    addingTagsH3.innerHTML = 'Show ' + index;
    elementMain.appendChild(addingTagsH3);
}




