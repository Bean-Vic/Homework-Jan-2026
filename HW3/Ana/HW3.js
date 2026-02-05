
// **Do not use for loop. Use the built-in methods**

// Q1. Given the array of objects:
const items = [
	{ quantity: 1, price: 200 },
	{ quantity: 3, price: 350 },
	{ quantity: 5, price: 400 },
];

// 1) Given the array, implement a function for generating a new array which 
// doubles the quantity and price in each object.
function double(items){
	return items.map(item =>{
		return {
			quantity:item.quantity*2,
			price:item.price*2
		}
	})
}

// 2)  Given the array, implement a function for generating a new array 
// which contains item quantity > 2 and price > 300 only.
function filterItem(items){
	return items.filter(item =>{
		return item.quantity > 2 && item.price > 300;
	})
}


// 3) Given the array, implement a function to calculate the total value of the items.
function totalValue(items){
	return items.reduce((accumulator, item) =>{
		return accumulator + (item.quantity * item.price);
	},0)
};

console.log(double(items));
console.log(filterItem(items));
console.log(totalValue(items));	


// Q2. Given the string, implement a function to remove all the non-alphabet 
// characters and extra space in the string and convert the string to all lowercase.
const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ";
function cleanString(str){
	return str
		.split(' ')
		.map(word => word.replace(/[^a-zA-Z]/g, ''))
		.filter(word => word.length > 0)
		.join(' ')
		.toLowerCase();
}
console.log(cleanString(" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  "));


// Q3 Implement a function to merge two arrays of objects on uuid, but first has uuid and name, 
// second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge. 
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
// function merge1(first, second){ //not working
// 	const merged = [...first, ...second];
// 	const res = {};
// 	merged.forEach(item =>{
// 		if (!res[item.uuid]){
// 			res[item.uuid] = {uuid:item.uuid, name:null,role:null};
// 		}
// 		if (item.name){
// 			res[item.name]  = item.name;
// 		}
// 		if (item.role){
// 			res[item.role] = item.role;
// 		}
// 	});
// 	return Object.values(res).sort((a,b)=>a.uuid-b.uuid);
// }
function merge(first, second){
	const map = new Map();

	first.forEach(item =>{
		map.set(item.uuid, {uuid:item.uuid, name:item.name, role:null});
	});
	second.forEach(item =>{
		if (map.has(item.uuid)){
			map.get(item.uuid).role = item.role;
		} else {
			map.set(item.uuid, {uuid:item.uuid, name:null, role:item.role});
		}
	});
	return Array.from(map.values()).sort((a,b)=>a.uuid - b.uuid);
}
console.log(merge(first, second));	