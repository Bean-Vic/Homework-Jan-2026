/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const n = s.length;
  let count = 0;

  function expand(l, r) {
    while (l >= 0 && r < n && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
  }

  for (let i = 0; i < n; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return count;
};