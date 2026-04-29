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
                ans += "("
                recursive(o - 1, c, ans)
                ans = ans.slice(0, ans.length - 1)
            }

            if (c > 0 && c > o) {
                ans += ")"
                recursive(o, c - 1, ans)
                ans = ans.slice(0, ans.length - 1)
            }
        }

        recursive(n , n,  "")

        return result
    }
}
