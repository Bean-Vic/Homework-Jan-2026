let items = itemsObject.map((current) => {
  return {
    quantity: current.quantity * 2,
    price: current.price * 2,
  };
});

console.log(items);

let filterItems = itemsObject.filter(
  (current) => current.quantity > 2 && current.price > 300
);

console.log(filterItems);

let sumValue = itemsObject.reduce((sum, element) => {
  return sum + element.price * element.quantity;
}, 0);

console.log(sumValue);
