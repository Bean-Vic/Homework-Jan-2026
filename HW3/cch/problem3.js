function mergeArr(first, second) {
  const mergeMap = new Map();

  first.forEach((element) => {
    mergeMap.set(element.uuid, {
      uuid: element.uuid,
      name: element.name ?? null,
      role: element.role ?? null,
    });
  });

  second.forEach((element) => {
    if (mergeMap.has(element.uuid)) {
      mergeMap.get(element.uuid).role = element.role ?? null;
    } else {
      mergeMap.set(element.uuid, {
        uuid: element.uuid,
        name: element.name ?? null,
        role: element.role ?? null,
      });
    }
  });

  return [...mergeMap.values()].sort((a, b) => a.uuid - b.uuid);
}
