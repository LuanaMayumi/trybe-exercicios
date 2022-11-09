// acessar os valores de um objeto, mais simples e com menos declarações.

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { name } = product;
console.log(name); // Smart TV Crystal UHD

const { price } = product;
console.log(price);
console.log(product.price);

const product1 = {
  produto: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { produto, seller } = product1;
console.log(produto); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

