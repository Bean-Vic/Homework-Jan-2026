/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const n = s.length;
  if (n < 2) return s;

  let bestL = 0;
  let bestR = 0;
  function expand(l, r) {
    while (l >= 0 && r < n && s[l] === s[r]) {
      l--;
      r++;
    }
    return [l + 1, r - 1];
  }

  for (let i = 0; i < n; i++) {
    let [l1, r1] = expand(i, i);
    if (r1 - l1 > bestR - bestL) {
      bestL = l1;
      bestR = r1;
    }

    let [l2, r2] = expand(i, i + 1);
    if (r2 - l2 > bestR - bestL) {
      bestL = l2;
      bestR = r2;
    }
  }

  return s.slice(bestL, bestR + 1);    
};