class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {}
        for (let num of nums){
            freqMap[num] = (freqMap[num] || 0) + 1
        }

        // console.log(map)

        // bucket: index = frequency
        const bucket = Array(nums.length + 1).fill().map(() => []);
        for (let num in freqMap) {
            bucket[freqMap[num]].push(Number(num));
        }

        // console.log(map2)
        let result = []
         for (let i = bucket.length - 1; i >= 0; i--) {
            for (let num of bucket[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }

        // console.log(keys)
        return result
    }
}
