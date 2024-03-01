function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
// Example usage:
var num = 5;
var result = factorial(num);
console.log("Factorial of ".concat(num, " is: ").concat(result));
