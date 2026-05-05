class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let rows = matrix.length; 
        let cols = matrix[0].length;
        let l = 0;
        let r = rows * cols - 1


        while (l <= r) {
            let mid = Math.floor((r + l)/2)

            // convert to 2D
            let row = Math.floor(mid / cols)
            let col = mid % cols

            if (matrix[row][col] === target){
                return true
            } else if (matrix[row][col] > target){
                r = mid - 1
            } else {
                l = mid + 1
            }

        }

        return false


    }
}
