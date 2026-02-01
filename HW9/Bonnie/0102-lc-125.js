/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length==0 || s.trim().length==0){
       return true;
    }
    s=s.toLowerCase().replace(/[^a-z0-9]/g, "");
   if(s !== s.split("").reverse().join("")){
        return false;

   }



    return true;
};