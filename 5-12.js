//5.
// time complexity: O(n)
// this function cannot be optimized anymore, since we must
// check each character
function urlify(url) {
  return url.split(' ').join('%20');
}

console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));

//6.
// time complexity: O(n)
// cannot be optimized any further
function greaterThanFive(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] === 'number' && arr[i] < 5) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

console.log(greaterThanFive([1, 4, 5, 10, 11, 2]));

//7.
// time complexity: O(n)
// loop through array and add the pairs together
function maxSum(arr) {
  let currSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    currSum = Math.max(currSum + currNum, 0);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

//8.
// time complexity: O(n)
// cannot be simplified any further
function merge(arr1, arr2) {
  let result = [];
  let a = 0;
  let b = 0;
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] <= arr2[b]) {
      result.push(arr1[a++]);
    } else {
      result.push(arr2[b++]);
    }
  }
  return result;
}

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//9.
// time complexity: O(n)
// cannot be further simplified
function remove(str, arr) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(
  remove('Battle of the Vowels: Hawaii vs. Grozny', ['a', 'e', 'i', 'o', 'u'])
);

//10.
// time complexity:O(n^2)
// could possibly be simplified
function products(arr) {
  let product = arr.reduce((pro, val) => pro * val, 1);
  return arr.map(val => product / val);
}

console.log(products([1, 3, 9, 4]));

// 11.
// time complexity: O(n)
// cannot be simplified any further
function arrayZero(arr) {
  arr = arr.map(row => {
    let foundZero = false;

    row.forEach(num => {
      if (num === 0) {
        foundZero = true;
        return true;
      }
    });

    if (foundZero) {
      return row.map(num => 0);
    } else {
      return row;
    }
  });

  return arr;
}

let arr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

console.log(arrayZero(arr));

// 12.
// time complexity: O(n)
function isRotation(str1, str2) {
  return (str2 + str2).indexOf(str1) !== -1 ? true : false;
}

console.log(isRotation('amazon', 'azonam'));
console.log(isRotation('amazon', 'azonma'));
