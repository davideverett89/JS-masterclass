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

// Break it down:
// Explicitly write out the steps you need to take.


// Solve/Simplify

// Look Back and Refactor


// Write a function that takes in a string and returns counts of each character in the string

console.clear();

const charCounter = (string) => {
  const chars = string.toLowerCase().split('');
  console.log(chars);
  const charCount = chars.reduce((x, y) => {
      if (isAlphaNumeric(y)) {
        x[y] = ++x[y] || 1;
    }
    return x;
  }, {});
  console.log(charCount);
};

const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false;
    }
    return true;
};

charCounter('Hello world!#$@#!@@@');

// Problem Solving Patterns:

// 1. Frequency Counter:

// Use objects and avoid nested loops.

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     return arr1.every((x, i)=> {
//         const square = Math.pow(x, 2);
//         if (arr2.includes(square)) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// };

console.clear();

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         const correctIndex = arr2.indexOf(Math.pow(arr1[i], 2));
//         if (correctIndex === -1) return false;
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// };

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(Math.pow(key, 2) in frequencyCounter2)) return false;
        if (frequencyCounter2[Math.pow(key, 2)] !== frequencyCounter1[key]) return false;
    }
    return true;
};


console.log(same([2, 2, 4], [4, 16]));

console.clear();

function validAnagram(str1, str2) {
    const data1 = {};
    const data2 = {};
    if (str1.length !== str2.length) return false;
    for (let char of str1) {
        data1[char] = (data1[char] || 0) + 1;
    }
    for (let char of str2) {
        data2[char] = (data2[char] || 0) + 1;
    }
    for (let key in data1) {
        if (data2[key] !== data1[key]) return false;
    }
    return true;
}

console.log(validAnagram('rat', 'car'));

console.clear();

// function sumZero(arr) {
//     let val1; let val2;
//     for (let i = 0; i < arr.length; i++) {
//         val1 = arr[i];
//     }
//     for (let j = arr.length; j >= 0; j--) {
//         val2 = arr[j];
//     }
//     if (val1 + val2 === 0) {
//         return [val1, val2];
//     } else {
//         return undefined;
//     }
// };

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

console.clear();

// function countUniqueValues(arr) {
//     const newArr = [...arr];
//     console.log('Starting array:', newArr);
//     let left = 0;
//     let right = left + 1;
//     while (right <= newArr.length - 1) {
//         if (left !== right) {
//             console.log('Starting left/right values:', left, right);
//             if (newArr[left] === newArr[right]) {
//                 right++;
//             } else {
//                 left++
//                 const number = newArr[right];
//                 console.log('Number removed from array:', newArr.splice(left, 1, number));
//                 console.log('New array:', newArr);
//             }
//         } else {
//             right++;
//         }
//     }
//     return left;
// };

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// function maxSubarraySum(arr, range) {
//     if (range > arr.length) return null;
//     const sums = [];
//     let right = range;
//     console.log('Starting array:', arr);
//     for (let i = 0; i < arr.length - range + 1; i++) {
//         const sum = arr.slice(i, right).reduce((acc, curr) => acc + curr);
//         console.log(sum);
//         sums.push(sum);
//         right++;
//     }
//     return Math.max(...sums);
// };

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};

console.clear();

// function sameFrequency(num1, num2) {
//     if (num1.toString().length !== num2.toString().length) return false;
//     let data1 = {}; let data2 = {};
//     for (let i of num1.toString()) {
//         data1[i] = ++data1[i] || 1;
//     }
//     for (let j of num2.toString()) {
//         data2[j] = ++data2[j] || 1;
//     }
//     for (let key in data1) {
//         if (data2[key] !== data1[key]) return false;
//     }
//     return true;
// }

// sameFrequency(182, 281);

function areThereDuplicates(...args) {
    const data = {};
    for (let i of args) {
        data[i] = (data[i] || 0) + 1;
    }
    for (let key in data) {
        if (data[key] === 2) {
            return true;
        }
    }
    return false;
}

// console.log(areThereDuplicates('a', 'b', 'c', 'a'));

function averagePair(arr, num) {
    let left = 0; let right = 1;
    while (left < arr.length - 1) {
        const leftNum = arr[left];  const rightNum = arr[right];
        const avg = (leftNum + rightNum) / 2;
        if (avg === num) return true;
        if (right === arr.length - 1) {
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

console.clear();

function isSubsequence(str1, str2) {
    let left = 0;
    const arr1 = str1.split(''); const arr2 = str2.split('');
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[left] === arr2[i]) {
            left++;
        }
    }
    if (left === arr1.length) return true;
    return false;
}

// console.log(isSubsequence('hello', 'hello world'));

console.clear();

function minSubArrayLen(arr, num) {
    let sum = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    while (start < arr.length) {
        if (sum < num && end < arr.length) {
            sum += arr[end];
            end++
        } else if (sum >= num) {
            minLength = Math.min(minLength, end - start)
            sum -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

console.clear();

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      longest = Math.max(longest, i - start + 1);
      seen[char] = i + 1;
    }
    return longest;
  }

console.log(findLongestSubstring('rithmschool'));

// Recursion

console.clear();

function countDown(num) {
    if (num <= 0) {
        console.log('All Done.');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(50);

console.clear();

function sumRange(num) {
    console.log(num);
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log('Result:', sumRange(10));

console.clear();

// Iterative Factorial Solution

// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total;
// }

// Recursive Factorial Solution

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num -1);
}

console.log('Result:', factorial(5));

console.clear();

// Helper Method Recusion

// function collectOddValues(arr) {
//     let result = [];

//     function helper(input) {
//         if (input.length === 0) return;
//         if (input[0] % 2 !== 0) result.push(input[0]);
//         helper(input.slice(1));
//     }
//     helper(arr);
//     return result;
// }

// Pure Recursion

function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log('Result:' ,collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

