/**
 * 
 * @param {int} n 
 * @returns {int}
 */

const largestPrimeFactor = (n) => {
  const primes = [];
  for (let factor = 2; factor <= n; factor++) {
    while ((n % factor) === 0) {
      primes.push(factor);
      n /= factor;
    }
  }
  return primes[primes.length - 1];
};

console.log(largestPrimeFactor(600851475143));

/**
 * Credit to the algorithm goes to apollovishwas from Stack Overflow
 * and their solution in this thread:
 * https://stackoverflow.com/questions/39899072/how-can-i-find-the-prime-factors-of-an-integer-in-javascript
 */