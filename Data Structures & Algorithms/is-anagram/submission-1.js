class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = {}
        let map2 = {}

        for (let char of s){
            // console.log(char)
            if (char in map1){
                map1[char] = map1[char] + 1
            } else {
                map1[char] = 1
            }
        }
        
        for (let char of t){
            // console.log(char)
            if (char in map2){
                map2[char] = map2[char] + 1
            } else {
                map2[char] = 1
            }
        }

        if (Object.keys(map1).length !== Object.keys(map2).length) {
            return false
        } 

        for (let key in map1){
            // console.log(key)
            if (map1[key] !== map2[key]){
                return false
            }
        }

        // console.log(map1)
        // console.log(map2)
        return true
    }
}
