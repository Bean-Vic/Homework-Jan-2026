const string = " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ";

const trimmedString = string.trim();

const lowercaseString = trimmedString.toLowerCase();

const alphabeticString = lowercaseString.replace(/[^a-z\s]/g, '');

console.log(alphabeticString);
