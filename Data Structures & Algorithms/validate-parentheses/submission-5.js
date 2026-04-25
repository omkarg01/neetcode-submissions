class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        }

        let stack = []

        // if (str.length % 2 === 1) return false;

        for (let char of s){
            if (char in map){
                if (stack.pop() !== map[char]){
                    return false
                }
            } else {
                stack.push(char)
            }
        }
        
        return stack.length === 0;
    }
}
