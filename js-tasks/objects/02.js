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
var middleNode = function(head) {
    let len = 0, check = head, count = 1;
    while (check != null) {
        check = check.next;
        len++;
    }
    len = Math.floor(len / 2);
    while (count <= len) {
        count++;
        head = head.next;
    }
    return head;
};