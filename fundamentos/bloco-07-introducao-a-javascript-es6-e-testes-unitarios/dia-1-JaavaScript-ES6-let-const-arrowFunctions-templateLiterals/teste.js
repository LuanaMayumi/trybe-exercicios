// var numbers = [4,2,5];
// numbers.sort(function (a,b){
//   return a-b;
// });
// console.log(numbers);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  oddsAndEvens.sort(function(a,b){
    return a-b;
  });

console.log(oddsAndEvens);

///ARROW FUNCTION///

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort ((a,b) => {
return a-b;
});

console.log(oddsAndEvens);
