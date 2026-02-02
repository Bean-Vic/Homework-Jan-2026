// 3. longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  const hm = new Map(); // char -> last index
  let left = 0;
  let right = 0;
  let maxLen = 0;

  while (right < s.length) {
    const ch = s[right];

    if (!hm.has(ch)) {
      hm.set(ch, right);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    } else {
      left = Math.max(left, hm.get(ch) + 1);
      hm.set(ch, right);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    }
  }

  return maxLen;
}   

// Example usage:
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 