/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //length check
    if(s.length !== t.length)return false;

    let arr = t.split('');
    for(let i = 0; i<s.length; i++){
        let index = arr.indexOf(s[i]);
        if(index === -1){
            return false;
        }
        arr.splice(index,1);
    }
        
    return true;
        

};