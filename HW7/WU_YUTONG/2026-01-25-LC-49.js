var groupAnagrams = function(strs) {
    const groups = {};

    for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        const key = s.split('').sort().join('');

        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(s);
    }

    return Object.values(groups);
};
