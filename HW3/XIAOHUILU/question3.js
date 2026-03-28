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

//Implement a function to merge two arrays of objects on uuid, 
// but first has uuid and name, second has uuid and role. With the not existing property, 
// fill with null. Sort according to uuid after merge.

function mergeByUUID(first, second) {
    const map = new Map();

    for (const item of first) {
        map.set(item.uuid, {
            uuid: item.uuid,
            name: item.name,
            role: null
        });
    }

    for(const item of second){
        if (map.has(item.uuid)) {
            map.get(item.uuid).role = item.role;
        } else {
            map.set(item.uuid,{
                uuid: item.uuid,
                name: item.name,
                role: item.role
            });
        }
    }

    return Array.from(map.values()).sort((a, b) => a.uuid - b.uuid);
}

console.log(mergeByUUID(first, second));