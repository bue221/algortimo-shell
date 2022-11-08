import { Typography } from '@mui/material'
import { swap, newTrace, addToTrace, lastSorted, createKey } from '../helpers'

const BubbleSort = (nums: any[]) => {
  const trace = newTrace(nums)

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1])
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1])
      }
    }

    addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1 - i])
  }

  return trace
}

export const BubbleSortKey = createKey('Comparing', 'Swapping')

export const BubbleSortDesc = {
  title: 'Bubble Sort',
  description: (
    <Typography variant="subtitle1">
      <Typography
        component="a"
        color="secondary"
        href="https://es.wikipedia.org/wiki/Bubble_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </Typography>{' '}
      es un algoritmo de clasificación simple que recorre repetidamente la
      lista, compara elementos adyacentes y los intercambia si están en el mal
      orden. El paso por la lista se repite hasta que se ordena la lista. los
      algoritmo, que es un tipo de comparación, se llama así por la forma más
      pequeña o los elementos más grandes aparecen en la parte superior de la
      lista. Aunque el algoritmo es simple, es demasiado lento y poco práctico
      para la mayoría de los problemas
    </Typography>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>
}

export default BubbleSort
