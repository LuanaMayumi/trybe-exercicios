const wakingUp = () => "Acordando!!";
console.log(wakingUp());

const breakfast = () => "Bora tomar café!";
console.log(breakfast());

const goSleep = () => "Partiu dormir!!";
console.log(goSleep());

const doingThings = (func) => func();
console.log(doingThings(wakingUp));