const string =
    " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

//Task
/* Given the string, implement a function to:
   replace the character with space
   remove extra space in the string
   convert the string to all lowercase.
 */
function editingString(str) {
    return str
        .replaceAll("-", " ") //replace all the "-" with space
        .trim() // remove the space at the beginning and the end of the string
        .split(/\s+/) // \s+ means one or more spaces, treat it like a single divider to split words into list
        .join(" ") // join the list of words into a string, with one space in between.
        .toLowerCase();
}

console.log("After editing: ", editingString(string))