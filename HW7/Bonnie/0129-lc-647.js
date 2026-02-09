/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if(s.length === 1){
        return 1;
    }//base case

    let count = 0;

    //for each i, set it to the center and compare left and right, 
    for(let i = 0; i<s.length;i++){
        //"aaa", i= 0, 

        //set pointer
        //for odd palondormic
        let left = i;
        let right = i;
         //if there are equal,count+1, and move 1 more index for left and right, compare until ther are not equal
        while(left >= 0 && right < s.length && s[left] === s[right])
        {
            count++;
            left --;
            right++;
            
        }

        //for even
        left = i;
        right = i+1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }



/////
//need stop to campare when left or right has no index

    return count;
    
};