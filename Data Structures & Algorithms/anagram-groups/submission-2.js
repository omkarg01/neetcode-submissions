class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (let each of strs){

            let key = Array(26).fill(0)
            // console.log(key)
            for (let char of each){
                key[char.charCodeAt(0) - 97] += 1 
                // console.log(char)
                // console.log(char.charCodeAt(0) - 97)
            }

            console.log(key)

            key.join(',')
            
            if (!map[key]){
                map[key] = []
            }

            map[key].push(each)
        }

        console.log(map)

        return Object.values(map)
    }
}
