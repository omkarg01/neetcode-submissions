class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (let each of strs){

            let key = Array(26).fill(0)
            for (let char of each){
                key[char.charCodeAt(0) - 97] += 1 
            }

            key = key.join('#')
            console.log(key, "#")
            
            if (!map[key]){
                map[key] = []
            }

            map[key].push(each)
        }

        return Object.values(map)
    }
}
