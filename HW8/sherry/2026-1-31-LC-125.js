/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const news = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    console.log(news);
    let left = 0;
    let right = news.length -1;
    while(left < right){
        if(news[left] !== news[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};