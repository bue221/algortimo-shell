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
