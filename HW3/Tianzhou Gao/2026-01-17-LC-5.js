/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) return s;

    // Manacher's algo
    let T = '^#' + s.split('').join('#') + '#$';
    let n = T.length;
    let P = new Array(n).fill(0);
    
    let C = 0;
    let R = 0;
    
    for (let i = 1; i < n - 1; i++) {
        let i_mirror = 2 * C - i;

        if (R > i) {
            P[i] = Math.min(R - i, P[i_mirror]);
        }

        while (T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
            P[i]++;
        }

        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
    }

    let maxLen = 0;
    let centerIndex = 0;
    
    for (let i = 1; i < n - 1; i++) {
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }

    let start = Math.floor((centerIndex - maxLen) / 2);
    
    return s.substring(start, start + maxLen);
};