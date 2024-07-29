//REVERSE A STRING
const reverseStr = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseStr("Hello World"));

//PALINDROME:
const palindromeStr = (str) => {
  const lowerCaseStr = str.toLowerCase();
  const reversedStr = lowerCaseStr.split("").reverse().join("");
  return lowerCaseStr === reversedStr;
};

console.log(palindromeStr("MALAYALAM"));
//NUMBER OF OCCURRENCE OF A CHARACTER IN A STRING:
const countOccurrence = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) {
      count++;
    }
  }
  return count;
};

console.log(countOccurrence("Hello World LLB", "l"));

//FIND THE TWO STRINGS ARE ANAGRAM OR NOT:
const findAnagram = (str1, str2) => {
  const normalStr = (str) => {
    return str.toLowerCase().split("").sort().join("");
  };
  return normalStr(str1) === normalStr(str2);
};

const string1 = "	players";
const string2 = "	parsley";
console.log(findAnagram(string1, string2));

//CALCULATE NUMBER OF VOWELS AND CONSONANT:
const calculateVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      vowels.includes(char) ? vowelCount++ : consonantCount++;
    }
  }
  return { vowelCount, consonantCount };
};

console.log(calculateVowels("sakdjhljkdhjashjdhjasjdhhuuwuueyE"));

//Get the matching element in an array:

const values = [2, 4, 9, 6, 22, 19, 25, 32, 48, 22];

const matchingElement = values.filter((items) => {
  return items === 22;
});
console.log(matchingElement);

const matchElement = values.includes(19);

const lessThan25 = values.filter((items) => {
  return items < 25;
});

const greaterThan25 = values.filter((items) => {
  return items > 25;
});

console.log(greaterThan25, lessThan25, matchingElement, matchElement);

//Reverse an array without using the built in function:

const reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
};
const value = [2, 4, 1, 5, 6];
console.log(reverseArray(value));

//Swapping two numbers without the third variable:

let x = 10;
let y = 5;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);

// Fibonacci series using recursion:

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
n = 10;
for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}

//How sum all trhe numbers in an array:

const sumArray = (arr) => {
  let total = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return total;
};

//Alternate solution without the reduce function:
const addArray = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const allArray = [24, 32, 44, 12, 22];
console.log(sumArray(allArray));
console.log(addArray(allArray));

const reverseAnArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
};

const input = [6, 3, 7, 2, 1, 8, 10];
console.log(reverseAnArray(input));

//Bubble sort algorithm:

const arr = [8, 5, 6, 4, 2, 3, 7, 1];

const bubbleSort = (arr) => {
  let len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort(arr));

//Binary search:
const arrSorted = [1, 2, 3, 4, 5, 6, 7, 8];
const binarySearch = (arr, low, high, x) => {
  let mid = Math.floor((low + high) / 2);
  if (x === arr[mid]) {
    return mid;
  } else if (x < arr[mid]) {
    return binarySearch(arr, low, mid - 1, x);
  } else {
    return binarySearch(arr, mid + 1, high, x);
  }
};
const found = binarySearch(arrSorted, 0, arrSorted.length - 1, 2);
console.log(found);

//Find the largest number:
const largestNumer = (arr) => {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

//Find the second largest number in an array:
const secondLargestNumer = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const array1 = [22, 56, 99, 21, 200, 221, 97];
console.log(largestNumer(array1), secondLargestNumer(array1));

//Find the prime number in an array:

const primeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(primeNumber(99));

//Find the maximum product subarray:

const maxProduct = (arr) => {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let multi = arr[i];
    for (j = i; j < i + 1; j++) {
      result = Math.max(result, multi);
      multi *= arr[j];
    }
    result = Math.max(result, multi);
  }
  return result;
};

const arr3 = [1, -2, -3, 0, 7, -8, -2];
console.log(maxProduct(arr3));

//matrice multiplication:
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  // Check if multiplication is possible
  if (colsA !== rowsB) {
    throw new Error(
      "Number of columns in the first matrix must be equal to the number of rows in the second matrix."
    );
  }

  // Initialize the result matrix with zeros
  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  // Perform the multiplication
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}

// Example usage:
const matrixA = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const matrixB = [
  [7, 8, 9],
  [10, 11, 12],
];

const result = multiplyMatrices(matrixA, matrixB);
console.log(result);

function addMatrices(mat1, mat2) {
  const rows = mat1.length;
  const cols = mat1[0].length;

  // Check if matrices have the same dimensions
  if (rows !== mat2.length || cols !== mat2[0].length) {
    throw new Error("Matrices must have the same dimensions");
  }

  // Initialize the result matrix
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Add corresponding elements
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = mat1[i][j] + mat2[i][j];
    }
  }

  return result;
}

// Example usage
const mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const mat2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const sum = addMatrices(mat1, mat2);
console.log(sum);
