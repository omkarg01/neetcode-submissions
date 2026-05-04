class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        let hash1 = Array(26).fill(0)
        let hash2 = Array(26).fill(0)

        for (let i = 0; i < s1.length; i++){
            ++hash1[s1.charCodeAt(i) - 97]
            ++hash2[s2.charCodeAt(i) - 97]
        }

        // let i = 0;
        // let j = s1.length - 1;

        // while (j < s2.length){
        //     if (this.isSubstring(hash1, hash2)){
        //         return true
        //     } else {
        //         --hash2[s2.charCodeAt(i) - 97];
        //         ++i
        //         ++j
        //         ++hash2[s2.charCodeAt(j) - 97]
        //     }
        // }

        let i = 0
        for (let j = s1.length - 1; j < s2.length; j++){
            // console.log(s2[j])
            if (this.isSubstring(hash1, hash2)){
                return true
            } else {
                console.log(j)
                console.log(s2[i], s2.charCodeAt(i) - 97, s2[j], s2.charCodeAt(j) - 97)
                // console.log(s2[j])
                --hash2[s2.charCodeAt(i) - 97];
                console.log("after decrement i",hash2)
                ++i
                // ++j
                ++hash2[s2.charCodeAt(j + 1) - 97];
                console.log("after incrment j ", hash2)
            }

        }

        return false;

    }

    isSubstring(hash1, hash2){
        for (let i = 0; i < hash1.length; i++){
            if (hash1[i] !== hash2[i]){
                return false
            }
        }

        console.log("***********")
        console.log(hash1)
        console.log(hash2)

        return true;
    }
}
