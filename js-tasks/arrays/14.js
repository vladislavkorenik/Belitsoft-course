function prefill(n, v) {
let arr = [];
if (n === 0) {
  return arr;
}
let int_n = parseInt(n);
if (Number.isNaN(int_n) || int_n < 0 || int_n != n) {
  throw new TypeError(n + " " + "is invalid");
}
for (let i = 0; i < n; i++) {
  arr.push(v);
}
return arr;
}