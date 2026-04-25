class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let maxArea = 0;

        while ( i < j){
            let minHeight = Math.min(heights[i], heights[j]);
            let area = minHeight * (j - i)
            maxArea = Math.max(area, maxArea);
            if (heights[i] < heights[j]){
                i++;
            } else {
                j--;
            }
        }

        return maxArea;
    }
}
