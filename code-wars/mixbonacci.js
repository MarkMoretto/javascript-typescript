/**
 * @summary Code Wars- Mixbonacci problem
 * @see https://www.codewars.com/kata/5811aef3acdf4dab5e000251
 * @author Mark Moretto
*/


/**
 * @description Fibonacci recursive function with memoization.
 * @see https://oeis.org/A000045
*/
fibonacci = function(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n <= 1) return n;
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}


/**
 * @description Padovan recursive function with memoization.
 * @see https://oeis.org/A000931
*/
padovan = function(n, memo) {
    memo = memo || {};

    if (memo[n]) return memo[n];
    if (n === 0) return 1;
    if (n === 1 || n === 2) return 0;

    return memo[n] = padovan(n - 2, memo) + padovan(n - 3, memo);
}


/**
 * @description Jacobsthal recursive function with memoization.
 * @see https://oeis.org/A001045
*/
jacobsthal = function(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n <= 1) return n;
    return memo[n] = jacobsthal(n - 1, memo) + (2 * jacobsthal(n - 2, memo));
}


/**
 * @description Pell number recursive function with memoization.
 * @see https://oeis.org/A000129
*/
pell = function(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n <= 1) return n;
    return memo[n] = (2 * pell(n - 1, memo)) + pell(n - 2, memo);
}


/**
 * @description Tribonacci recursive function with memoization.
 * @see https://oeis.org/A000073
*/
tribonacci = function(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n <= 1) return 0;
    if (n === 2) return 1;
    return memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
}


/**
 * @description Tetranacci recursive function with memoization.
 * @see https://oeis.org/A000129
*/
tetranacci = function(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n <= 2) return 0;
    if (n === 3) return 1;
    return memo[n] = tetranacci(n - 1, memo) + tetranacci(n - 2, memo) + tetranacci(n - 3, memo) + tetranacci(n - 4, memo);
}


// Create map with specified keywords and related, uninstantiated functions as values.
const funcmap = new Map();
funcmap.set('fib', fibonacci);
funcmap.set('pad', padovan);
funcmap.set('jac', jacobsthal);
funcmap.set('pel', pell);
funcmap.set('tri', tribonacci);
funcmap.set('tet', tetranacci);






/**
 * @description Main Mixbonacci function
 * @param {Array} pattern - Array of abbreviations to use in function.
 * @param {number} length - Number of values to return in result array.
*/
function mixbonacci(pattern, length) {

    if (length === 0 || pattern.length === 0) return [];

    let result = [];

    // Create Map() from pattern array with zero as the default value.
    let patmap = new Map(pattern.map(key => [key, 0]));

    let count = 0;

    while (count < length) {

        for (let j = 0; j < pattern.length; j++) {
            let current = pattern[j];
            let i = patmap.get(current);
            result.push(funcmap.get(current)(i));
            patmap.set(current, patmap.get(current) + 1);
            count++;
        }
    }
    // Return only the section of the resulting array that we want.
    return result.slice(0, length);
}


/****************************************************/
// Sample input
const pattern = ['jac', 'jac', 'pel'];
const length = 10;
mixbonacci(pattern, length);
