/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // if (!root) return true;
        let ans = true
        function height(curr){
            if (!curr) return 0;

            let left = height(curr.left);
            let right = height(curr.right);

            let diff = Math.abs(left - right);
            if (diff > 1) {
                ans = false
            } 
            return 1 + Math.max(left, right)
            

        }
        height(root)

        return ans
    }
}
