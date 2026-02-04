function normalizeString(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const result = normalizeString(string);
console.log(result);
