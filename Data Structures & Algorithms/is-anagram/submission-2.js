class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let map = {}

        for (let char of s){
            // console.log(char)
            map[char] = (map[char] || 0) + 1;
        }

        for (let char of t){
            if (!map[char]) return false;
            map[char] -= 1
        }

        return true
    }
}
