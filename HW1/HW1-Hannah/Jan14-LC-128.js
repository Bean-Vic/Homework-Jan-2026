function longestConsecutive(nums) {
  const set = new Set(nums);
  let best = 0;

  for (const x of set) {
    // only start a sequence at numbers that have no predecessor
    if (!set.has(x - 1)) {
      let cur = x;
      let len = 1;

      while (set.has(cur + 1)) {
        cur += 1;
        len += 1;
      }
      if (len > best) best = len;
    }
  }
  return best;
}