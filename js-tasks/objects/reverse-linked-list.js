/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let rev = null, curr = head;
    while (curr != null) {
        let temp = curr.next;
        curr.next = rev;
        rev = curr;
        curr = temp;
    }
    
    return rev;
};