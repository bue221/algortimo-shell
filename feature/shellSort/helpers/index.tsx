export const newTrace = (array: Array<number | string>) => {
  return [
    {
      array: [...array],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: []
    }
  ]
}

export const addToTrace = (
  trace: {
    array: Array<number | string>
    groupA: Array<number | string>
    groupB: Array<number | string>
    groupC: Array<number | string>
    groupD: Array<number | string>
    sortedIndices: Array<number | string>
  }[],
  array: Array<number | string>,
  sortedIndices: Array<number | string> = [],
  groupA: Array<number | string> = [],
  groupB: Array<number | string> = [],
  groupC: Array<number | string> = [],
  groupD: Array<number | string> = []
) => {
  trace.push({
    array: [...array],
    groupA: [...groupA],
    groupB: [...groupB],
    groupC: [...groupC],
    groupD: [...groupD],
    sortedIndices: [...sortedIndices]
  })
}

export const lastSorted = (trace: any) => {
  return trace[trace.length - 1].sortedIndices
}

export const swap = (
  array: Array<number | string>,
  i: number,
  j: number
): void => {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

export const createRange = (
  start: number,
  end: number
): Array<number | string> => {
  const a: any = Array(end - start)?.keys()
  return [...a].map((elem) => elem + start)
}

export const createKey = (
  groupA?: string,
  groupB?: string,
  groupC?: string,
  groupD?: Array<number | string>
) => {
  return { groupA, groupB, groupC, groupD }
}
