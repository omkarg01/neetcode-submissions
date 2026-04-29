class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = []

        let recursive = (o, c, ans) => {
            if (ans.length === n * 2){
                result.push(ans)
                return
            }

            if (o > 0){
               recursive(o - 1, c, ans + "(");
            }

            if (c > 0 && c > o) {
                recursive(o, c - 1, ans + ")");
            }
        }

        recursive(n , n,  "")

        return result
    }
}
