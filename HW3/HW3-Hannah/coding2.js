const string = " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ";

const cleanString = (str) => {
  return str
    .toLowerCase()                     
    .replace(/[^a-z\s]/g, "")         
    .split(/\s+/)                      
    .filter(word => word.length > 0)   
    .join(" ");                     
};

console.log(cleanString(string));
