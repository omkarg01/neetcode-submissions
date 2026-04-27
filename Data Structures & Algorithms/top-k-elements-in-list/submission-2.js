class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        for (let num of nums){
            map[num] = (map[num] || 0) + 1
        }

        console.log(map)

        let map2 = {}
        for (let key in map){
            if (map[key] in map2){
                map2[map[key]].push(key)
            }else {
                map2[map[key]] = [key]
            }
        }

        console.log(map2)

        let keys = Object.keys(map2).sort((a, b) => b - a).slice(0, k)
        let ans = []
        for (let key of keys) {
            for (let num of map2[key]) {
                ans.push(Number(num));
                if (ans.length === k) return ans;
            }
        }

        // console.log(keys)
        return ans
    }
}
