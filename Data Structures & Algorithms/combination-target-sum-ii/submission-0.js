class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = []
        candidates.sort((a, b) => a - b)

        let backtrack = (path, start, targetSum) => {
            if (targetSum === 0){
                result.push([...path])
                return 
            }
            
            if (targetSum < 0){
                return
            }


            for (let i = start; i < candidates.length; i++){
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue
                }
                path.push(candidates[i])
                backtrack(path,  i + 1, targetSum - candidates[i])
                path.pop()
            }

        }

        backtrack([], 0, target)

        return result
    }
}
