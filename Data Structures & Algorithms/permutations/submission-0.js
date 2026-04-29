class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []

        let backtrack = (path, arr) => {
            if (arr.length == 0){
                result.push([...path])
                return
            }

            for (let i = 0; i < arr.length; i++){
                path.push(arr[i])
                backtrack(path, [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)])
                path.pop()
            }
        }

        backtrack([], nums)
        return result
    }
}
