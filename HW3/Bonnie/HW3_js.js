//itemsObject tasks
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// (a) new array: double quantity + price
const doubleItems = (arr) =>
  arr.map(({ quantity, price }) => ({
    quantity: quantity * 2,
    price: price * 2,
  }));

// (b) new array: quantity > 2 AND price > 300
const filterItems = (arr) =>
  arr.filter(({ quantity, price }) => quantity > 2 && price > 300);

// (c) total value of items (sum of quantity * price)
const totalValue = (arr) =>
  arr.reduce((sum, { quantity, price }) => sum + quantity * price, 0);

console.log(doubleItems(itemsObject));
console.log(filterItems(itemsObject));
console.log(totalValue(itemsObject));



const normalizeString = (str) =>
  str
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();


// merge two arrays by uuid, fill missing props with null, sort by uuid
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

const mergeByUuid = (a1, a2) => {
  const map1 = a1.reduce((m, obj) => m.set(obj.uuid, obj), new Map());
  const map2 = a2.reduce((m, obj) => m.set(obj.uuid, obj), new Map());

  return [...new Set([...a1, ...a2].map((x) => x.uuid))]
    .sort((x, y) => x - y)
    .map((uuid) => ({
      uuid,
      name: map1.get(uuid)?.name ?? null,
      role: map2.get(uuid)?.role ?? null,
    }));
};

console.log(mergeByUuid(first, second));
