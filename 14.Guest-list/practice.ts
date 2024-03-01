function factorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Example usage:
const num = 5;
const result = factorial(num);
console.log(`Factorial of ${num} is: ${result}`);
