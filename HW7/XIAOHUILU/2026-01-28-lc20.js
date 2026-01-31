
// lc20, valid parentheses

var isValid = function(s) {
    const closeToOpen = {
        ')':'(',
        ']' : '[',
        '}' : '{',
    };
    const stack = [];
    for (const ch of s) {
        if (ch in closeToOpen) {
            if (stack.length === 0 || stack[stack.length - 1] !== closeToOpen[ch]) {
                return false;
            }
            stack.pop();
        }else {
            stack.push(ch); 
        }
          
    }
    
    return stack.length === 0;
};