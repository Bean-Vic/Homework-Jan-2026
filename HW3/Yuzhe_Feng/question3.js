// Question 1

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//(1).
function double_items(items) {
  return items.map((item) => ({
    quantity: item.quantity * 2,
    price: item.price * 2,
  }));
}

//(2).
function filter_items(items) {
  return items.filter((item) => item.quantity > 2 && item.price > 300);
}

//(3).
function value_calculate(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

// Question 2

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ";

function clean_string(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

// Question 3

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function UUID_merge(first_arr, second_arr) {
  const map = new Map();

  first_arr.forEach((item) => {
    map.set(item.uuid, { uuid: item.uuid, name: item.name, role: null });
  });

  second_arr.forEach((item) => {
    if (map.has(item.uuid)) {
      map.get(item.uuid).role = item.role;
    } else {
      map.set(item.uuid, { uuid: item.uuid, name: null, role: item.role });
    }
  });

  return Array.from(map.values()).sort((a, b) => a.uuid - b.uuid);
}

// Test / Output

console.log("Q1 - Doubled Items:", double_items(itemsObject));
console.log("Q1 - Filtered Items:", filter_items(itemsObject));
console.log("Q1 - Total Value:", value_calculate(itemsObject));

console.log("Q2 - Cleaned String:", clean_string(string));

console.log("Q3 - Merged Result:", UUID_merge(first, second));
