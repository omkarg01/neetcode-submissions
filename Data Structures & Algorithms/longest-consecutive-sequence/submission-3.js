class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set()
        let longestSubSeq = 0;


        for (let each of nums){
            set.add(each)
        }

        for (let each of nums){
            if (set.has(each - 1)){
                continue
            }
            let i = 1
            console.log(set.has(each + 1), each)
            let j = each
            while (set.has(j + 1)){
                console.log(set)
                i++
                j++
                longestSubSeq = Math.max(longestSubSeq, i)
            }
            longestSubSeq = Math.max(longestSubSeq, i)
        }
        console.log(set)
        return longestSubSeq
    }
}
