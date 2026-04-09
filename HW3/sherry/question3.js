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

const mergedArr = {};
first.forEach(({ uuid, name }) => {
  mergedArr[uuid] = { uuid, name, role: null };
});
second.forEach(({ uuid, role }) => {
  if (mergedArr[uuid]) {
    mergedArr[uuid].role = role;
  } else {
    mergedArr[uuid] = { uuid, name: null, role };
  }
});

const result = Object.values(mergedArr).sort((a, b) => a.uuid - b.uuid);

console.log(result);
