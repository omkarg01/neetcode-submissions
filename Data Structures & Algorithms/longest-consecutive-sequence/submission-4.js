class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longestSubSeq = 0;

        for (let each of nums){
            if (set.has(each - 1)) continue 
            
            let length = 1
            let curr = each
            while (set.has(curr + 1)){
                curr++
                length++
            }
            longestSubSeq = Math.max(longestSubSeq, length)
        }
        return longestSubSeq
    }
}
