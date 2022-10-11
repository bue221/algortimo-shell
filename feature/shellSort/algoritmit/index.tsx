import React from 'react'
import { swap, newTrace, addToTrace, createRange, createKey } from '../helpers'

const ShellSort = (nums: Array<number | string>) => {
  const trace = newTrace(nums)

  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < nums.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        addToTrace(trace, nums, [], [i, i + gap])
        if (nums[i + gap] < nums[i]) {
          addToTrace(trace, nums, [], [], [i, i + gap])
          swap(nums, i, i + gap)
          addToTrace(trace, nums, [], [], [i, i + gap])
        } else {
          break
        }
      }
    }
  }

  addToTrace(trace, nums, createRange(0, nums.length))
  return trace
}

export const ShellSortKey = createKey('Comparing', 'Swapping')

export const ShellSortDesc = {
  title: 'Shell Sort',
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>
      <sup>3/2</sup>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>
}

export default ShellSort
