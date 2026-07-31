/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let count = {};
    while(head != null) {
        if(count[head.val] == head) {
            return true;
        }
        else {
            count[head.val] = head;
        }
        head = head.next;
    }
    return false;
};