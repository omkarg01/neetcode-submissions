class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}

        for (let i = 0; i < nums.length; i++){
            // if target - nums[i] in map return the ans
            // else store nums[i] with index
            let diff = target - nums[i];
            console.log(map)
            if (diff in map) {
                return [map[diff], i]
            } else {
                map[nums[i]] = i
            }
        }
    }
}
