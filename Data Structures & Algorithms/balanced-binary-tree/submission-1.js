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
        function height(curr){
            if (!curr) return 0;

            let left = height(curr.left);
            let right = height(curr.right);

            let diff = Math.abs(left - right);
            if (left == -1 || right == -1 || diff > 1) {
                return -1;
            } else {
                return 1 + Math.max(left, right)
            }

        }


        return height(root) != -1 
    }
}
