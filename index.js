function add(a, b) {
    // we'll fill this in shortly
    return a+b;
  }
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}
function increment(n=5) {
    n++ 
    return n;
}
function decrement(n=5) {
    n--
    return n;
}
function makeInt(n=0) {
    
    return parseInt(n, 10); //=> 2
}
function preserveDecimal(n) {
    return parseFloat("2.222"); // 80.123999
}
function preserveDecimal(n) {
    return parseFloat(n);
}