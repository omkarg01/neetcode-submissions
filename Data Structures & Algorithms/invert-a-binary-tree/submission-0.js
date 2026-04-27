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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null
        // let res = [];
        function traverse(curr) {
            if (!curr) return
            let temp = curr.left
            curr.left = curr.right
            curr.right = temp
            // res.push(curr.val)
            traverse(curr.left)
            traverse(curr.right)
        }
        
        traverse(root)
        return root
       
    }

    


}
