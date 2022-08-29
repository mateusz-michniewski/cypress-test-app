function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function getPrimeNumbers(max) {
	// A list of booleans where index 2 being true corresponds to 2 being prime
	var isPrime = [];

	// Initial population of isPrime
	for (var i = 0; i < max; i += 1) {
		if (i != 0 && i != 1) {
			isPrime.push(true);
		}
		else {
			isPrime.push(false);
		}
	}

	// Iterate over entire list
	// Element => true if index is prime else false
	for (var i = 0; i < max; i += 1) {
		if (isPrime[i]) {
			for (var j = i + i; j < max; j += i) {
				isPrime[j] = false;
			}
		}
	}

	var primes = [];

	// Assemble list of primes
	for (var i = 0; i < max; i += 1) {
		if (isPrime[i]) {
			primes.push(i);
		}
	}

	return primes;
}

const getPrimeNums=num=>Array(num-1).fill().map((e,i)=>2+i).filter((e,i,a)=>a.slice(0,i).every(x=>e%x!==0));

module.exports = { getPrimes, getPrimeNumbers }