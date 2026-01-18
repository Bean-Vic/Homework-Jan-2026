const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const mapArr = itemsObject.map((item) => {
  return { quantity: item.quantity * 2, price: item.price * 2 };
});

console.log(mapArr);

const filterArr = itemsObject.filter((item) => {
  return item.quantity > 2 && item.price > 300;
});

console.log(filterArr);

const reduceArr = itemsObject.reduce((acc, cur) => {
  return acc + cur.quantity * cur.price;
}, 0);
console.log(reduceArr);
