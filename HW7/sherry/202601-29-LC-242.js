/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const arr = new Array(26).fill(0); // a - 0 b - 1.....
  for (let i = 0; i < s.length; i++) {
    let idx = s[i].charCodeAt(0) - 97;
    arr[idx]++;
  }
  console.log(arr);
  for (let j = 0; j < t.length; j++) {
    let idx = t[j].charCodeAt(0) - 97;
    arr[idx]--;
    if (arr[idx] < 0) return false;
  }
  return true;
};
