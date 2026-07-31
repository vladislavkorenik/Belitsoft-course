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
var deleteDuplicates = function(head) {
    let copy = head;   
    
    while (copy && copy.next) {
        if(copy.val == copy.next.val) {
            copy.next = copy.next.next;
        }
        else {
            copy = copy.next;
        }
    } 
    
    return head;
};