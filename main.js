// Section 2: Timing Our Code

const addUpToFirst = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const ta = performance.now();
console.log('Add up to first:', addUpToFirst(200));
const tb = performance.now();


const addUpToSecond = (n) => {
    return n * (n + 1) / 2;
}

const tc = performance.now();
console.log('Add up to second:', addUpToSecond(200));
const td = performance.now();

console.log(`addUpToFirst time elapsed: ${(tb - ta) / 1000} seconds`);
console.log(`addUpToSecond time elapsed: ${(td - tc) / 1000} seconds`);

const logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
  }
};

const logAtMost5 = (n) => {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(10);
logAtMost5(10);