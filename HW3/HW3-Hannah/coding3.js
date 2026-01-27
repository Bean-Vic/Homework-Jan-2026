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

const mergeByUUID = (arr1, arr2) => {

  const map = [...arr1, ...arr2].reduce((acc, cur) => {
    const { uuid } = cur;

    if (!acc[uuid]) {
      acc[uuid] = { uuid, name: null, role: null };
    }

    acc[uuid] = { ...acc[uuid], ...cur };
    return acc;
  }, {});

  return Object.values(map).sort((a, b) => a.uuid - b.uuid);
};

console.log(mergeByUUID(first, second));
