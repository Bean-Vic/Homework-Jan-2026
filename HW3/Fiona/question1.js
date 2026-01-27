const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

// Task 1
// Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
function doubleFunction(items) {
    return items.map(
        items => (
            {
                quantity: items.quantity * 2,
                price: items.price * 2,
            }
        )
    )
}
console.log("Task 1 - Double the quantity and price", doubleFunction(itemsObject));

//Task 2
//Given the array, implement a function for generating a new array which contains item quantity  2 and price  300 only.
function filterFunction(items) {
    return items.filter((item) => item.quantity > 2 && item.price > 300)
}
console.log ("Task 2 - filtered result: ", filterFunction(itemsObject));

//Task 3
//Given the array, implement a function to calculate the total value of the items.
function sumUp(items) {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
}
console.log("Task 3 - the total value is: ", sumUp(itemsObject));