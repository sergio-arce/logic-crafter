/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | undefined}
 */
export function twoSum(nums: number[], target: number): [number, number] | undefined {
  const arr = new Map()

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (arr.has(diff)) {
      return [arr.get(diff), i]
    }

    arr.set(nums[i], i)
  }
}












/**
 * use Set 
 */
// function twoSum(nums, target) {
//   const seen = new Set();
//   const valueToIndex = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const complement = target - num;

//     console.log(i, seen.has(complement))
//     if (seen.has(complement)) {
//      return [valueToIndex[complement], i];
//     }

//     seen.add(num);
//     valueToIndex[num] = i;
//   }

//   return null;
// }