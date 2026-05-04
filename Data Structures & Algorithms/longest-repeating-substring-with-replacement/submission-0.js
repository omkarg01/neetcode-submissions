class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let right, left = 0;
        let map = {};
        let maxLen = 0;
        let maxFreq = 0;

        for (right = 0; right < s.length; right++){

            map[s[right]] = (map[s[right]] || 0) + 1

            maxFreq = Math.max(maxFreq, map[s[right]])

            while ((right - left + 1) - maxFreq > k){
                map[s[left]] =  map[s[left]] - 1;
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1)

        }
        return maxLen;

        // console.log(map)
    }
}
