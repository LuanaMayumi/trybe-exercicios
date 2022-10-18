const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

customer.lastName = 'Faria'; //para adicionar uma nova chave
console.log(customer);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};
console.log(customer2);
customer2['lastName'] = 'Silva';//para adicionar uma nova chave
console.log(customer2);

//adicionar propriedades de acordo com novas variaveis

const customer4 = {
  firstName: 'Luana',
  age: 31,
  job: 'Developer',
};

customer4.secondName = 'Mayumi'
// console.log(customer4);

let newKey = 'lastName';
const lastName = 'Gomes';
customer4[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer4.firstName} ${customer4.secondName} ${customer4.lastName}`;
customer4[newKey] = fullName;
console.log(customer4);