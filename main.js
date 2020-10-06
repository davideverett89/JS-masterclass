// Section 2: Timing Our Code

// const addUpTo = (n) => {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// const t1 = performance.now();
// console.log(addUpTo(100000000));
// const t2 = performance.now();


const addUpTo = (n) => {
    return n * (n + 1) / 2;
}

const t1 = performance.now();
console.log(addUpTo(200));
const t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

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