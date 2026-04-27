/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;
        let nextNode = curr ? curr.next : curr

        while (curr) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode; 
        }

        return prev
    }
}
