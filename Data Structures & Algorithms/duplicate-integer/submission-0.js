class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}

        for (let num of nums){
            // console.log(num)
            // console.log(map)
            if (num in map){
                // map[num] = map[num] + 1
                return true
            } else {
                map[num] = 1
            }
        }

        return false

    }
}
