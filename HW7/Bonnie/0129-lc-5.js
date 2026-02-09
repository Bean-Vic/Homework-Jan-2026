/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //if s.lenght = 1
    if(s.length==1){
        return s;
    }

    let max = s[0];
    //loop the string, set i to be center and compare next palindromic to get max s
    for(let i=0; i<s.length;i++){
        //FOR even palind
        let right = i+1;
        let left = i;
        while(left>=0 && right<=s.length && s[left] === s[right]){
            //"cbbd"
            temp = s.substring(left,right+1);//shoudlbe "cb"
            if((right-left)>= max.length){//1-0=1 >=1
                max= temp;//max=="cb"
            }
            left--;
            right++;
        }

        //odd
        right = i;
        left = i;
        while(left>=0 && right<=s.length && s[left] === s[right]){
            temp = s.substring(left,right+1);
            if((right-left)>=max.length){
                max= temp;
            }
            left--;
            right++;
        }
    }

    return max;
    
};