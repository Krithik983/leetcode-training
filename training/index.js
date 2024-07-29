//How do you reverse a string:

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
const str = "Hello Moto";
console.log(reverseString(str));

//Alternate solution without the built-in function:
const reverseString1 = (str) => {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
};

console.log(reverseString1("Hello"));

//How do you determine if a string is palindrome:

const palindromeString = (str) => {
  const lowerCaseStr = str.toLowerCase();
  const reversedString = lowerCaseStr.split("").reverse().join("");
  return lowerCaseStr === reversedString;
};
console.log(palindromeString("MALAYAlam"));

//Find the number of occurrence of a character in a string:

const occurrenceStr = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) {
      count++;
    }
  }
  return count;
};

console.log(occurrenceStr(str, "o"));

//FInd if two strings are anagrams:
const checkAnagram = (str1, str2) => {
  const normalise = (str) => {
    return str.toLowerCase().split("").sort().join("");
  };
  return normalise(str1) === normalise(str2);
};
const str1 = "listen";
const str2 = "silen";
console.log(checkAnagram(str1, str2));

//Calculate number of vowels and consonants in a string:

const checkVowels = (str) => {
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

const string1 = "sahdgQWOIEYQFIOUSCJAKXLCNABXCOAISHUHAS";
console.log(checkVowels(string1));

// How do you get matching element in an integer array?:
const arr = [2, 4, 5, 1, 7];

const matchingElement = arr.filter((int) => {
  return int > 5;
});

const lessThan5 = arr.filter((item) => {
  return item < 5;
});

console.log(matchingElement);
console.log(lessThan5);

//Code the bubble sort algorithm:

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

//How do you reverse an array:

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

//Swap two numbers without using the third variable:

let a = 15;
let y = 10;

a = a + y;
y = a - y;
a = a - y;

console.log(a, y);

// Print a fibonacci series using recursion:

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};
n = 3;
for (let i = 0; i <= n; i++) {
  console.log(fibonacci(i));
}

//How do you find the factorial of an integer:
n = 3;

const factorial = (n) => {
  let ans = 1;
  if (n <= 1) {
    return 1;
  }
  for (i = 2; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};
console.log(factorial(n));

//Binary search:
const binarySearch = (arr, a, start, end) => {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === a) {
    return true;
  }
  if (arr[mid] > a) {
    return binarySearch(arr, a, start, mid - 1);
  } else {
    return binarySearch(arr, a, mid + 1, end);
  }
};

let sortArr = [1, 3, 5, 6, 7, 8];
a = 8;

const found = binarySearch(sortArr, a, 0, sortArr.length - 1);
console.log(found);

//Find the second largest number in an array:

const findLargestNumber = (arr) => {
  let largestNumber = arr[0];
  let secondLargestNumer = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumer = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumer) {
      secondLargestNumer = arr[i];
    }
  }
  return secondLargestNumer;
};

const array2 = [45, 54, 56, 72, 99, 22];
console.log(findLargestNumber(array2));

//Check if the given number is prime:

const checkPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(checkPrime(22));

//Sum of all the number in array:

const sumArray = array2.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sumArray);

//OR

const addArray = (arr) => {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(addArray(array2));

//Find the maximum product subarray:

const maxProduct = (arr) => {
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let multi = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      result = Math.max(result, multi);
      multi *= arr[j];
    }
    result = Math.max(result, multi);
  }
  return result;
};

const arr3 = [1, -2, -3, 0, 7, -8, -2];
console.log(maxProduct(arr3));
