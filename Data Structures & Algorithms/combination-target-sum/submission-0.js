class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []
        let backtrack = (path, target, start) => {
            if (0 == target){
                result.push([...path])
                return 
            }

            //  if (target < 0) return

            for (let i = start; i < nums.length && target > 0; i++){
                path.push(nums[i])
                backtrack(path, target - nums[i], i)
                path.pop()
            }

        }
        backtrack([], target, 0)

        console.log(result)

        return result
    }
}
