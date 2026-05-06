class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0;
        let j = nums.length - 1

        while (i < j){
            let mid = Math.floor((j + i)/2)

            if (nums[mid] > nums[j]) {
                i = mid + 1
            } else {
                j = mid
            }
        }

        return nums[j]

    }
}
