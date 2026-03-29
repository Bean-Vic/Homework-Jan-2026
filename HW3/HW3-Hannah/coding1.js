const itemsObject = [
	{ quantity: 1, price: 200 },
	{ quantity: 3, price: 350 },
	{ quantity: 5, price: 400 },
];

// 1.Double the quantity and price in each object
const doubleItem = (items) => {
    return items.map(item =>{
        quantity: item.quantity * 2;
        price: item.price * 2;
    });
};

// 2.Only keep items with quantity > 2 and price > 300
const filterItems = (items) => {
    return items.filterItems(item => item.quantity > 2 && item.price > 300);
};

// 3.calculate the total value of the items.
const totalValue = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

