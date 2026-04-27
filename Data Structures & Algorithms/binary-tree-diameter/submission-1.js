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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDia = 0
        function height(curr){
            if (!curr) return 0;

            let left = height(curr.left)
            let right = height(curr.right)

            maxDia = Math.max(maxDia, left + right)

            return 1 + Math.max(left, right)
        }

        height(root)

        return maxDia
    }
}






