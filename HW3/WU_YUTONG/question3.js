// question 3

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
];


function merge_array(first, second) {
  const temp = {};

  // 1. handle first array
  first.forEach(item => {
    temp[item.uuid] = {
      uuid: item.uuid,
      name: item.name,
      role: null,
    };
  });

  // 2. handle second array
  second.forEach(item => {
    if (temp[item.uuid]) {
      temp[item.uuid].role = item.role;
    } else {
      temp[item.uuid] = {
        uuid: item.uuid,
        name: null,
        role: item.role,
      };
    }
  });

  // 3. sort
  const result = Object.values(temp);
  result.sort((a, b) => a.uuid - b.uuid);

  return result;
}


// test
console.log(merge_array(first, second));
