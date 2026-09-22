const products = [
  { id: 1, name: "marker", qty: 100, price: 25 },
  { id: 2, name: "duster", qty: 0, price: 250 },
];

let nextId = 3;

export const getAllProducts = () => {
  return products;
};

export const addProduct = (item) => {
  item.id = nextId;
  nextId++;
  products.push(item);
};
