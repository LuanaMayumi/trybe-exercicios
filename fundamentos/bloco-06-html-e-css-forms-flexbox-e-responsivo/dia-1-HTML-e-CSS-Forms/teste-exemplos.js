
///EXEMPLO: Clicar com o segundo botao do mouse no Body e nao aparecer nada

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Não apareceu o menu')
    });
    
    
    
    let submitButton = document.getElementById('button-submit')
    
    submitButton.addEventListener('click', function(event) {
    event.preventDefault() //nao deixa que o browser de um refresh, e a informação vai ficar na pagina.//Não armazena em lugar nenhum, só nao deixa a info ser perdida
    
    let nameValue = getElementById('fullName').value;//essa variável está recebendo o valor que a pessoa digitou no meu campo name
    
    alert(`Obrigado pelas informações ${nameValue}!`); //qdo clicar no botão enviar, vou capturar o valor colocado no meu campo Name e vai aparecer o alert. 
    //Quado vc clica em Submit, vc executa um formulrio (é como se a pagina atualizasse) e eu perco as informações.Para pegar as informações é usado o PreventDefault() > método JS
    }
    

   
   
    
    
   
    
   

    