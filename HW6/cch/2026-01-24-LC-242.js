var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (!map[ch]) return false;
    map[ch]--;
  }

  return true;
};
