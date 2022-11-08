// shell sort algoritm
export const shellSortMethod = (arr: Array<number | string>) => {
  let n = arr.length

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = arr[i]
      let j
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap]
      arr[j] = temp
    }
  }
  return arr
}

// Bubble sort algoritm
export const bubbleSort = (array: Array<number | string>) => {
  for (var i = 0; i <= array.length - 1; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

function swap(
  items: { [x: string]: any },
  leftIndex: string | number,
  rightIndex: string | number
) {
  var temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}
function partition(items: any[], left: any, right: any) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j) //sawpping two elements
      i++
      j--
    }
  }
  return i
}
// Quick sort algoritm
export const quickSort = (items: any[], left = 0, right = items.length - 1) => {
  var index
  if (items.length > 1) {
    index = partition(items, left, right) //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right)
    }
  }
  return items
}

// This are the important methods to improve the analytics
export const iteratorMethod = async (
  iterations: number,
  jumpData: number,
  startData: number,
  callback: (data: Array<number>) => void
) => {
  let times: Array<number> = []
  let numberDataPerIteration: Array<number> = []

  for (let i = 0; i <= iterations; i++) {
    numberDataPerIteration.push(Number(startData) + Number(jumpData) * i)
    let data = Array.from(
      { length: Number(startData) + Number(jumpData) * i },
      () => Math.floor(Math.random() * 1000)
    )
    let start = performance.now()
    await callback(data)
    let end = performance.now()
    times.push(end - start)
  }

  return {
    times,
    dataIteration: numberDataPerIteration
  }
}

export const iteratorMethodWithImportData = async (
  ArraysList: Array<any>,
  callback: (data: Array<number>) => void
) => {
  let times: Array<number> = []
  let numberDataPerIteration: Array<number> = []

  for (let i = 0; i <= ArraysList.length - 1; i++) {
    numberDataPerIteration.push(ArraysList[i].length)
    let start = performance.now()
    await callback(ArraysList[i])
    let end = performance.now()
    times.push(end - start)
  }

  return {
    times,
    dataIteration: numberDataPerIteration
  }
}
