var minWindow = function (s, t) {
  if (!s || !t || s.length < t.length) return "";

  // 1️⃣ 统计 t 中每个字符需要的次数
  const need = {};
  for (let ch of t) {
    need[ch] = (need[ch] || 0) + 1;
  }

  const window = {}; // 当前窗口里字符出现次数
  let left = 0;
  let right = 0;

  let required = Object.keys(need).length; // 需要满足的“字符种类数”
  let formed = 0; // 已经满足的字符种类数

  // 结果：长度 + 起始位置
  let minLen = Infinity;
  let start = 0;

  // 2️⃣ 滑动窗口
  while (right < s.length) {
    const c = s[right];
    window[c] = (window[c] || 0) + 1;

    // 如果某个字符刚好满足 need 要求
    if (need[c] && window[c] === need[c]) {
      formed++;
    }

    // 3️⃣ 当窗口已经包含 t 的全部字符，开始收缩左边
    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      const d = s[left];
      window[d]--;
      if (need[d] && window[d] < need[d]) {
        formed--; // 不再满足
      }
      left++;
    }

    right++;
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
};
