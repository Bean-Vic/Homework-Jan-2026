
**Do not use for loop. Use the built-in methods**

1. 

```jsx
const itemsObject = [
	{ quantity: 1, price: 200 },
	{ quantity: 3, price: 350 },
	{ quantity: 5, price: 400 },
];
```

- Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
- Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
- Given the array, implement a function to calculate the total value of the items.

2. `const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ";`
- Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
3.  ```jsx
const first = [
	{ uuid: 2, name: "test" },
	{ uuid: 5, name: "test5" },
	{ uuid: 3, name: "test3" }
];

const second = [
	{ uuid: 6, role: "pm" },
	{ uuid: 4, role: "engineer" },
	{ uuid: 1, role: "manager" },
	{ uuid: 2, role: "associate" }
];
```

- Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
