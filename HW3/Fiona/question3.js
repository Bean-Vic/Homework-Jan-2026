const first = [
    { uuid: 2, name: "test" }, { uuid: 5, name: "test5" }, { uuid: 3, name: "test3" }
];
const second = [
    { uuid: 6, role: "pm" },
    { uuid: 4, role: "engineer" }, { uuid: 1, role: "manager" },
    { uuid: 2, role: "associate" }
];

//Task
/*
Implement a function to
    merge two arrays of objects on uuid（first has uuid and name,second has uuid and role）.
    With the not existing property, fill with null.
    Sort according to uuid after merge.
 */
function mergeById(i, j) {
    //make a list of id
    const idList = Array.from (
        new Set([
            ...i.map(item => item.uuid),
            ...j.map(item => item.uuid)
        ])
    );
    //sort the id list
    idList.sort ((num1,num2) => num1-num2)

    //convert first and second array to map object
    const firstMap = new Map(i.map((item) => [item.uuid, item.name]));
    const secondMap = new Map(j.map((item) => [item.uuid, item.role]));

    //merge by id
    return idList.map((uuid) => ({
            uuid,
            name: firstMap.has(uuid) ? firstMap.get(uuid) : null,
            role: secondMap.has(uuid) ? secondMap.get(uuid) : null,
        })
    )

}
console.log("The new array: ", mergeById(first,second));