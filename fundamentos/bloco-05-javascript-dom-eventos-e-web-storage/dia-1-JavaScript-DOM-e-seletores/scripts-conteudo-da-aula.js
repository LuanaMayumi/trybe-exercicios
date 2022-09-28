// console.log("Olá!");

document.getElementById('teste');
//Recebe como parametro um ID, buscou minha ID teste na minha pagina HTML

console.log(document.getElementById('teste'));

//Outro exemplo:
document.getElementById('teste2');

console.log(document.getElementById('teste2'));

//para acessar o conteudo, usar .innerHTML > Inclusive tags

console.log(document.getElementById('teste2').innerHTML);

//propriedade .innerText

console.log(document.getElementById('teste').innerHTML);

console.log(document.getElementById('teste').innerText);

//para alterar um conteúdo

document.getElementById('teste').innerText = "Aprendizados da aul de hoje";
