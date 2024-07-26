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

const getLargestNumber = (arr) => {
  let largestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
};

const array1 = [34, 67, 99, 22, 1, 3];
console.log(getLargestNumber(array1));

//Find the second largest number in an array:

const getSecondLargest = (arr) => {
  let largestNumber = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(getSecondLargest(array1));
