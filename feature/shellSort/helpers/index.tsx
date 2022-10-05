export const newTrace = (array: any) => {
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
    array: any
    groupA: any
    groupB: any
    groupC: any
    groupD: any
    sortedIndices: any
  }[],
  array: any,
  sortedIndices = [],
  groupA = [],
  groupB = [],
  groupC = [],
  groupD = []
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
  array: { [x: string]: any },
  i: string | number,
  j: string | number
) => {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

export const createRange = (start: any, end: any) => {
  const a: any = Array(end - start)?.keys()
  return [...a].map((elem) => elem + start)
}

export const createKey = (
  groupA?: any,
  groupB?: any,
  groupC?: any,
  groupD?: any
) => {
  return { groupA, groupB, groupC, groupD }
}
