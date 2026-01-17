/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let start = 0;
    let charSet = new Set();

    for (let i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[i]);
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
};