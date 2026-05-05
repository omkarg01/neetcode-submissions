class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length - 1;
        while (l <= r){
            let mid = Math.floor((r + l)/2)
            console.log("mid", mid)
            console.log(matrix[mid][0] >= target, target <= matrix[mid][matrix[0].length - 1])
            console.log("first elem", matrix[mid][0] <= target)
            console.log("last elem" ,matrix[mid][matrix[0].length - 1])
            if (matrix[mid][0] <= target && target <= matrix[mid][matrix[0].length - 1]){
                return this.binarySearchIn1D(matrix[mid], target)
            } else if (matrix[mid][0] > target){
                r--
            } else {
                l++
            }
        }

        return false
    }

    binarySearchIn1D(array, target){
        let l = 0;
        let r = array.length - 1;
        console.log(array)
        while (l <= r){
            let mid = Math.floor((r + l)/2)
            console.log("mid", mid)
            // console.log(matrix[mid][0] <= target, )
            if (array[mid] === target){
                return true
            } else if (array[mid] > target){
                r--
            } else {
                l++
            }
        }

        return false
    }
}
