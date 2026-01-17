/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let start = 0;
    let charSet = new Set();

    for (let i = 0; i < s.length; i++) {
        if (charSet.has(s[i])) {
            ans = Math.max(ans, i - start);
            start = i;
        }
        charSet.add(s[i]);
    }
    return Math.max(ans, length);
};