class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
        let set = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        }

        let ans = []

        if (str.length % 2 === 1) return false;

        for (let s of str){
            if (!set[s]){
                ans.push(s)
            } else {
                console.log("s", s)
                console.log("ans", ans)
                console.log("ans[ans.length - 1] === set[s]", ans[ans.length - 1] === set[s])
                if (ans.length > 0 && ans[ans.length - 1] === set[s]){
                    ans.pop()
                    console.log("ans", ans)
                } else {
                    return false
                }
            }
        }
        
        console.log("ans", ans.length === 0)
        return ans.length === 0 ? true : false
    }
}
