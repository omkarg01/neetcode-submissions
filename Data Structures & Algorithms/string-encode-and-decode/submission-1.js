class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ""
        for (let s of strs){
            // console.log(s)
            str += s.length + "#" + s
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#"){
                 j++;
            }
            console.log("j", j)
            let length = Number(str.substring(i, j));
            console.log(length)
            let substring = str.substring(j + 1, j + 1 + length)
            res.push(substring);
            i = j + 1 + length;
        }

        return res
    }
}