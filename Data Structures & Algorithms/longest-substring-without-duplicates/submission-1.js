class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = {}
        let maxLen = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++){
            if (map[s[right]] != undefined && map[s[right]] >= left){
                left = map[s[right]] + 1
            } 
            map[s[right]] = right 

            console.log(map)

            maxLen = Math.max(maxLen, right - left + 1)

        }

        return maxLen
    }
}
