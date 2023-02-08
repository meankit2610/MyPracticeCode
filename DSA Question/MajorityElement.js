// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume
// that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Solution
var majorityElement = function (nums) {
  let len = nums.length;
  let times = Math.floor(len / 2);
  let countMap = new Map();

  for (let i = 0; i < len; i++) {
    if (countMap.has(nums[i])) {
      countMap.set(nums[i], countMap.get(nums[i]) + 1);
    } else {
      countMap.set(nums[i], 1);
    }
  }

  for (let [key, value] of countMap.entries()) {
    // console.log(count)
    if (value > times) {
      return key;
    }
  }
};