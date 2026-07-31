// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    let arr_even = items.filter( item => pred(item));
    let arr_odd = items.filter( item => !pred(item));
    
    items.splice(0);
    
    arr_odd.forEach( item => items.push(item));
    arr_even.forEach( item => items.push(item));
    
    return arr_odd.length;
}