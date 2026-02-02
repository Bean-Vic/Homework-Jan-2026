// question 2

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

function cleanString(str) {
  let result = str;

  result = result.replace(/-/g, " ");

  result = result.replace(/\s+/g, " ");

  result = result.trim();

  result = result.toLowerCase();

  return result;
}

console.log(cleanString(string));
