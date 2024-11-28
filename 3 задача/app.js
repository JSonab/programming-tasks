function isPrime(num) {
    if (num <= 1) {
        return false;
    } 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeNumbers(start, end) {
    let primes = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num)
        }
    }
    return primes;
}

console.log(primeNumbers(11, 58))