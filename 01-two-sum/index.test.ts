import { twoSum } from './index';

describe('Two Sum', () => {
  it('should return indices [0, 1] for input [2, 7, 11, 15] and target 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  it('should return indices [1, 2] for input [3, 2, 4] and target 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('should return indices [0, 1] for input [3, 3] and target 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })

  it('should return undefined when no solution is found', () => {
    expect(twoSum([1, 2, 3], 7)).toBeUndefined()
  })

  it('should return undefined for input [1] and target 2', () => {
    expect(twoSum([1], 2)).toBeUndefined()
  })

  it('should return indices [1, 2] for input [-3, 4, 7] and target 11', () => {
    expect(twoSum([-3, 4, 7], 11)).toEqual([1,  2]);
  });

})