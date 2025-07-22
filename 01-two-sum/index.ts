/**
1. Two Sum: https://leetcode.com/problems/two-sum/description
  Easy
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  Example 1:

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:

  Input: nums = [3,3], target = 6
  Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | undefined}
 */
export function twoSum(nums: number[], target: number): [number, number] | undefined {
  const obj: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    
    if (obj.hasOwnProperty(diff)) {
      return [obj[diff], i ]
    }

    obj[nums[i]] = i
  }
}

// ----------  Map --------------

// export function twoSum(nums: number[], target: number): [number, number] | undefined {
//   const arr = new Map()

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     if (arr.has(diff)) {
//       return [arr.get(diff), i]
//     }

//     arr.set(nums[i], i)
//   }
// }




// ----------  Set --------------

// function twoSum(nums, target) {
//   const set = new Set();
//   const valueToIndex = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const complement = target - num;

//     if (set.has(complement)) {
//      return [valueToIndex[complement], i];
//     }

//     set.add(num);
//     valueToIndex[num] = i;
//   }

//   return null;
// }