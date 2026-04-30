class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (let each of strs){

            let key = each.split("").sort().join("")
            // console.log(key)
            if (!map[key]){
                map[key] = []
            }

            map[key].push(each)
        }

        console.log(map)

        return Object.values(map)
    }
}
