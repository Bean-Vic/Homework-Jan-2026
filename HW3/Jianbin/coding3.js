function mergeByUuid(first, second) {
  const allUuids = Array.from(
    new Set([...first, ...second].map(item => item.uuid))
  );

  return allUuids
    .map(uuid => {
      const item1 = first.find(item => item.uuid === uuid);
      const item2 = second.find(item => item.uuid === uuid);

      return {
        uuid,
        name: item1 ? item1.name : null,
        role: item2 ? item2.role : null
      };
    })
    .sort((a, b) => a.uuid - b.uuid);
}

const mergedResult = mergeByUuid(first, second);
console.log(mergedResult);
