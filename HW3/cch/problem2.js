const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

function normalizeString(str) {
  return str
    .replace(/-/g, " ") // replace all '-' with space
    .replace(/\s+/g, " ") // collapse multiple spaces into one
    .trim() // remove leading/trailing spaces
    .toLowerCase(); // convert to lowercase
}
