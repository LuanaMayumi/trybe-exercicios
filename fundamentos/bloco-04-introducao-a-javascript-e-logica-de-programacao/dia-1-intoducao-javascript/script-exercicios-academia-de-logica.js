let Marina = 10;
let Silvia = 9;
let Iza = 8;



if (Marina < Silvia && Marina < Iza) {
    console.log('Marina é a pessoa mais jovem e possui ' + Marina); 
  }
else if (Silvia < Marina && Silvia < Iza) {
    console.log('Silvia é a pessoa mais jovem e possui ' + Silvia);
}
else if (Iza < Silvia && Iza < Marina) {
    console.log('Iza é a pessoa mais jovem e possui ' + Iza); 
}
   

let age = 18;
let sex ='M';
let weight = 70;
let height = 175;

let BMR;

if (sex === 'M'){
BMR = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
console.log('A taxa metabólica basal é: ' + Math.round(BMR) + ' Kcal');
} else if (sex === 'F') {
    BMR = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
    console.log('A taxa metabólica basal é: ' + Math.round(BMR) + ' Kcal');
} else {
    console.log('Os dados informados estão incorretos!');
}

let escolha = 9 ;

switch (escolha) {
    case 1:
        console.log("1 - Trybe Lanche Feliz");
        break;
    case 2:
        console.log("2 - McTrybe");
        break;
    case 3:
        console.log("3 - TrybeWooper");
        break;
    case 4:
        console.log("4 - X-Trybe");
        break;
    case 5:
        console.log("5 - Triplo Trybe com JS");
        break;  
    default:
        console.log("Ainda não possuímos esta opção :(");
}