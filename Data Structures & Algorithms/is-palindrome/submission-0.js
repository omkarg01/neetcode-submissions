class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        s = s.replace(/[^a-z0-9]/gi, '')
        let j = s.length - 1;
        while ( i <= j){
            if (s[i].toLowerCase() === s[j].toLowerCase()){
                i++;
                j--;
            } else {
                return false
            }
        }
        return true;
    }

}
