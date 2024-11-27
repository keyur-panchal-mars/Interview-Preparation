// Shuffle The Array

function shuffleArray(array){
    for(let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(`Shuffled Array: ${shuffleArray([1,2,3,4,5])}`);

// -----------------------------------------------------------------------------------------------------------------------
// Contains duplicates

var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    for (i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};

// -----------------------------------------------------------------------------------------------------------------------
// Remove duplicates

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ---------------------------------------------------------------------------
// Find Max and Min from Array

function findMinMax(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr),
    };
}

console.log(findMinMax([5, 1, 8, 3, 2])); // Output: { max: 8, min: 1 }

// ---------------------------------------------------------------------------
// Find the Intersection of Two Arrays

function findIntersection(arr1, arr2) {
    return arr1.filter((num) => arr2.includes(num));
}

console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// ---------------------------------------------------------------------------
// Remove Falsy Values from an Array

function removeFalsyValues(arr) {
    return arr.filter(Boolean); // Boolean is a shortcut for truthy check
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3])); // Output: [1, 2, 3]

// ---------------------------------------------------------------------------
// Count Even and Odd Numbers

function countEvenOdd(arr) {
    let even = 0, odd = 0;
    for (let num of arr) {
        if (num % 2 === 0) even++;
        else odd++;
    }
    return { even, odd };
}

console.log(countEvenOdd([1, 2, 3, 4, 5])); // Output: { even: 2, odd: 3 }

// ---------------------------------------------------------------------------
// Sort the Array

function sort(arr){
    return arr.sort((a,b) => { return a-b; });
   }
   
   console.log(sort([5,2,78,1,2,3,4,5]));

// ---------------------------------------------------------------------------
// Check if Array is Sorted

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4])); // Output: true
console.log(isSorted([1, 3, 2, 4])); // Output: false

// ---------------------------------------------------------------------------
//  Find the Sum of All Elements

function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(arraySum([1, 2, 3, 4])); // Output: 10

// ---------------------------------------------------------------------------
// Two sum Problem

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// ---------------------------------------------------------------------------
// Check for Palindromic Array

function isPalindromeArray(arr) {
    return arr.join('') === arr.reverse().join('');
}

console.log(isPalindromeArray([1, 2, 3, 2, 1])); // Output: true
console.log(isPalindromeArray([1, 2, 3, 4]));    // Output: false

// ---------------------------------------------------------------------------


