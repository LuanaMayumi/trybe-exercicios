const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

const greeting1 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting1(); // // Welcome pessoa usuária!

