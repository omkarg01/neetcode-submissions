class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)

        let result = []

        let recursive = (path, start) => {
            // if (){

            // }
            result.push([...path])
            for (let i = start; i < nums.length; i++){
                if (i > start && nums[i] === nums[i - 1]) {
                    continue
                }
                path.push(nums[i])
                recursive(path, i + 1)
                path.pop()
            }
        }

        recursive([], 0)

        return result
    }
}
