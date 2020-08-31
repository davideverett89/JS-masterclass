// Section 2: Timing Our Code

const addUpTo = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const t1 = performance.now();
console.log(addUpTo(100000000));
const t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);