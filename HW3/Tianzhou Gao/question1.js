const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

const doubleArray = (arr) => {
    return arr.map(item => {
        return {
            quantity: item.quantity * 2,
            price: item.price * 2
        };
    });
}

console.log(doubleArray(itemsObject));

const filterArray = (arr) => {
    return arr.filter(item => item.quantity > 2 && item.price > 300);
}

console.log(filterArray(itemsObject));

const totalArray = (arr) => {
    return arr.reduce((total, item) => {
        return total + (item.quantity * item.price);
    }, 0);
}

console.log(totalArray(itemsObject));