const itemsObject = [
	{ quantity: 1, price: 200 },
	{ quantity: 3, price: 350 },
	{ quantity: 5, price: 400 },
];

// Given the array, implement a function for generating a new array which doubles the quantity and price in each object.

const doubleArr = itemsObject.map(item => ({
  quantity: item.quantity * 2,
  price: item.price * 2
}));

console.log(doubleArr);



// Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.

const conditionArr = itemsObject.filter(item => item.quantity > 2 && item.price > 300);

console.log(conditionArr)


// Given the array, implement a function to calculate the total value of the items.

const totalValue = itemsObject.reduce((total, item) => {
	return total + item.quantity * item.price;
}, 0);

console.log(totalValue);