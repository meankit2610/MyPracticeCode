// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
// Input: (matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ]),
//   (target = 3);
// Output: true;

// Input: (matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ]),
//   (target = 13);
// Output: false;

//Solution

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] <= target && matrix[i][n - 1] >= target) {
      for (j = 0; j < n; j++) {
        if (matrix[i][j] == target) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
};