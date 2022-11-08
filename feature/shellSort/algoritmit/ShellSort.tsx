import { Typography } from '@mui/material'
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
  description: (
    <div>
      <Typography variant="subtitle1">
        <Typography
          color="secondary"
          component="a"
          href="https://es.wikipedia.org/wiki/Shellsort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shell Sort
        </Typography>
        , también conocido como método de Shell, es una generalización del
        ordenamiento por inserción donde elementos <em>gap</em> la distancia que
        los separa se comparan en lugar de elementos adyacentes. El método
        comienza ordenando pares de elementos lejos separadas unas de otras,
        reduciendo progresivamente la brecha entre elementos a comparar.
        Comenzando con elementos muy separados, puede moverse algunos elementos
        fuera de lugar en posición más rápido que un simple más cercano
        intercambio de vecinos. El tiempo de ejecución de Shellsort depende en
        gran medida de la secuencia de huecos que utiliza. Para muchas variantes
        prácticas, determinar su la complejidad del tiempo sigue siendo un
        problema abierto. Es una clasificación en el lugar algoritmo que no es
        estable.
      </Typography>
    </div>
  ),
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
