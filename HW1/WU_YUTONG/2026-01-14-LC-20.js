/*
 * Valid Parentheses
 *
/*
 * Problem:
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 */
var isValid = function(s) {
    const map = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    const stack = [];

    for (const c of s) {
        if (c in map) {
            stack.push(c);
        } else {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (map[top] !== c) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

