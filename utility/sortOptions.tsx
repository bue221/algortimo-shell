import BubbleSort from 'feature/shellSort/algoritmit/BubbleSort'
import QuickSort from 'feature/shellSort/algoritmit/QuickSort'
import ShellSort from 'feature/shellSort/algoritmit/ShellSort'

import { bubbleSort, quickSort, shellSortMethod } from './functions'

export const OptionsSort = {
  shell: {
    selectedMethod: 'shell',
    title: 'Shell sort',
    description: () => <h1>Descripcion</h1>,
    methodAnimation: (nums: any[]) => ShellSort(nums),
    methodAnalitycs: (nums: any[]) => shellSortMethod(nums)
  },
  bubble: {
    selectedMethod: 'bubble',
    title: 'Bubble sort',
    description: () => <h1>Descripcion</h1>,
    methodAnimation: (nums: any[]) => BubbleSort(nums),
    methodAnalitycs: (nums: any[]) => bubbleSort(nums)
  },
  quick: {
    selectedMethod: 'quick',
    title: 'Quick sort',
    description: () => <h1>Descripcion</h1>,
    methodAnimation: (nums: any[]) => QuickSort(nums),
    methodAnalitycs: (nums: any[]) => quickSort(nums)
  }
}
