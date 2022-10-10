//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

let buttonSubmit = document.getElementById('button-submit');

buttonSubmit.addEventListener('click', function(event) {
event.preventDefault();
console.log('teste');
});

 // Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
    
 const HREF_LINK = document.querySelector("#href");
    
 HREF_LINK.addEventListener('click', function(event){
 
     event.preventDefault();
     console.log('COISADO');
 })

  // Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

  const INPUT_CHECKBOX = document.querySelector("#input-checkbox");

  INPUT_CHECKBOX.addEventListener('click', function(event) {

      event.preventDefault();
      console.log('tirando o checkbox');
  })

  // Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)

  const INPUT_TEXT = document.querySelector("#input-text");

  INPUT_TEXT.addEventListener('keypress', function(event){
    
    let caracter = event.key;//Utilizando o event.key, é possível capturar qual tecla foi pressionada e então submeter o caractere correspondente a uma condição.
    
    if (caracter !== 'a') {
   event.preventDefault();
    console.log('somente a letra a');
    }
    
  })


