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
            if (matrix[mid][0] <= target && target <= matrix[mid][matrix[0].length - 1]){
                return this.binarySearchIn1D(matrix[mid], target)
            } else if (matrix[mid][0] > target){
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return false
    }

    binarySearchIn1D(array, target){
        let l = 0;
        let r = array.length - 1;
        while (l <= r){
            let mid = Math.floor((r + l)/2)
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
