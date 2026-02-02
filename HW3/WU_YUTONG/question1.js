

// question 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// 1. Given the array, implement a function for generating a new array which
// doubles the quantity and price in each object.
function double(arr) {
  const result = [];

  arr.forEach((item)=> {
    let newItem = {
      quantity: item.quantity * 2,
      price: item.price * 2,
    };

    result.push(newItem);
  });

  return result;
}

// 2. Given the array, implement a function for generating a new array which
// contains item quantity > 2 and price > 300 only.
function selection(arr) {
  const result = [];

  arr.forEach((item) => {
    if (item.quantity > 2 && item.price > 300) {
      result.push(item);
    }
  });

  return result;
}

// 3. Given the array, implement a function to calculate the total value of the items.
function calculation(arr) {
  let total = 0;

  arr.forEach((item) => {
    total = total + item.quantity * item.price;
  });

  return total;
}


console.log("double_result:");
console.log(double(itemsObject));

console.log("selection_result:");
console.log(selection(itemsObject));

console.log("calculation_result:");
console.log(calculation(itemsObject));
