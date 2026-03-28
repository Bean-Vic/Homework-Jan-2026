// leetcode 647.Palindromic Substrings
// we can use expand from center method to solve this question

var countSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += expandAroundCenter(s, i, i);
        count += expandAroundCenter(s, i, i+1);
    }
    return count;
} 

var expandAroundCenter = function(s, i, j) {
    let count = 0;
    while (i >=0 && j < s.length && s.charAt(i) === s.charAt(j)) {
        count++;
        i--;
        j++;
    }
    return count;
}

let a = "aaa";
console.log(countSubstrings(a));