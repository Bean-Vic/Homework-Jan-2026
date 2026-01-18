const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

const newStr = string
  .replaceAll("-", " ")
  .trim()
  .toLowerCase()
  .replace(/\s+/g, " ");
console.log(newStr);
