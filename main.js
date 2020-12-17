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

// Understand The Problem:

// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determinded from the inputs?  Do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are part of the problem?

// Explore examples:

// 1. Start with simple examples.
// 2. Progress to more complex examples.
// 3. Explore examples with empty inputs.
// 4. Explore examples with invalid inputs.

// Write a function that takes in a string and returns counts of each character in the string

console.clear();

const charCounter = (string) => {
  const chars = string.toLowerCase().split('');
  console.log(chars);
  const charCount = chars.reduce((x, y) => {
      if (x !== undefined) {
        if (y in x) {
            x[y]++;
        } else {
            x[y] = 1;
        }
        return x;
      }
  }, {});
  console.log(charCount);
};

charCounter('Hello world');

// Break it down:
// Explicitly write out the steps you need to take.