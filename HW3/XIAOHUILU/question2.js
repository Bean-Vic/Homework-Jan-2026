const string =   
" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ";



//Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.


function convertString(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z\s]/g, "")
        .replace(/\s+/g," ")
}
console.log(convertString(string))
