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

const mergeArrays = (arr1, arr2) => {
    const map = new Map();
    const allKeys = new Set();
    
    arr1.forEach(item => {
        Object.keys(item).forEach(key => allKeys.add(key));
    });
    arr2.forEach(item => {
        Object.keys(item).forEach(key => allKeys.add(key));
    });

    arr1.forEach(item => {
        const merged = {};
        allKeys.forEach(key => {
            merged[key] = item[key] !== undefined ? item[key] : null;
        });
        map.set(item.uuid, merged);
    });
    
    arr2.forEach(item => {
        if (map.has(item.uuid)) {
            const existing = map.get(item.uuid);
            allKeys.forEach(key => {
                existing[key] = item[key] !== undefined ? item[key] : existing[key];
            });
        } else {
            const merged = {};
            allKeys.forEach(key => {
                merged[key] = item[key] !== undefined ? item[key] : null;
            });
            map.set(item.uuid, merged);
        }
    });
    
    return Array.from(map.values()).sort((a, b) => a.uuid - b.uuid);
}

console.log(mergeArrays(first, second));