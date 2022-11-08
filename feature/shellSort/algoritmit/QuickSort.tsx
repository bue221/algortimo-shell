import { Typography } from '@mui/material'
import React from 'react'
import {
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  swap,
  createKey
} from '../helpers'

const QuickSort = (nums: any[]) => {
  // Estado inicial
  const trace = newTrace(nums)

  function choosePivot(array: any, start: number, end: number) {
    // Escojer elemento aletorio del principio o el final
    return Math.floor(Math.random() * (end - start)) + start
  }

  function partition(array: (string | number)[], start: number, end: number) {
    let i = start + 1
    let j = start + 1

    // Visualizacion asignar grupo al pivot
    addToTrace(trace, array, lastSorted(trace), [start])

    while (j <= end) {
      if (array[j] < array[start]) {
        // Visualize: Mark item that is less than pivot
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        )

        swap(array, i, j)

        // Visualizacion mover item menor
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        )
        i += 1
      }
      j += 1
    }

    // Visualizacion marcar centro
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    )
    swap(array, start, i - 1)

    // Visualizacion mover pivot al centro
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    )
    return i - 1
  }

  function recursiveQuickSort(
    array: (string | number)[],
    start: number,
    end: number
  ) {
    if (start >= end) {
      if (start === end) {
        // Visualizacion marcar item como ordenado
        addToTrace(trace, array, [...lastSorted(trace), start])
      }
      return null
    }

    let pivot = choosePivot(array, start, end)

    // Visualizacion marcar pivot seleccionado
    addToTrace(trace, array, lastSorted(trace), [pivot])

    swap(array, start, pivot)

    // Visualizacion marcar pivot del comienzo
    addToTrace(trace, array, lastSorted(trace), [pivot])

    pivot = partition(array, start, end)

    // Visualizacion: marcar pivot despues de organizar la particion
    addToTrace(trace, array, [...lastSorted(trace), pivot])

    recursiveQuickSort(array, start, pivot - 1)
    recursiveQuickSort(array, pivot + 1, end)
  }

  recursiveQuickSort(nums, 0, nums.length - 1)

  return trace
}

export const QuickSortKey = createKey('Comparing', 'Swapping', '', [
  'Less than pivot'
])

export const QuickSortDesc = {
  title: 'Quick Sort',
  description: (
    <div>
      <Typography variant="subtitle1" textAlign="center" mt={2}>
        <Typography
          color="secondary"
          component="a"
          href="https://es.wikipedia.org/wiki/Quicksort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quick Sort
        </Typography>{' '}
        es un algoritmo de clasificación en el lugar eficiente que en la
        práctica es más rápido que MergeSort y HeapSort. Sin embargo, no es una
        clasificación estable. algoritmo, lo que significa que el
        posicionamiento relativo de elementos de igual orden es no
        conservado.Quicksort es un algoritmo de divide y vencerás. Ordenación
        rápida primero divide una matriz grande en dos sub-matrices más
        pequeñas: la baja elementos y los elementos altos. Quicksort puede luego
        ordenar recursivamente el sub-matrices. Los pasos son:
      </Typography>
      <ol>
        <li>
          Elija un elemento, llamado pivote, de la matriz. Esto generalmente se
          hace al azar.
        </li>
        <li>Mueva el elemento pivote al comienzo de la matriz.</li>
        <li>
          <em>Fraccionamiento:</em> rordene la matriz para que todos los
          elementos con los valores menores que el pivote vienen antes que el
          pivote, mientras que todos los elementos con valores mayores que el
          pivote vienen después de él (los valores iguales pueden ir de todas
          formas). Después de esta partición, el pivote se encuentra en su etapa
          final. posición. Esto se llama la operacion de{' '}
          <em>fraccionamiento</em>.
        </li>
        <li>
          Aplique recursivamente los pasos anteriores al subarreglo de elementos
          con valores más pequeños y por separado a la sub-matriz de elementos
          con mayores valores.
        </li>
      </ol>
      <p>
        El caso base de la recursividad es una matriz de tamaño cero o uno, que
        están ordenados por definición.
      </p>
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
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  )
}

export default QuickSort
