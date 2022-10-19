import { Box } from '@mui/material'
import React from 'react'

import Bar from '../Bar'
import { useStyles } from './styled'

const getListOfBars = (
  numbers: any,
  maxNum: number,
  groupA: any[],
  groupB: any[],
  groupC: any[],
  groupD: any[],
  sortedIndices: any[]
) => {
  return numbers.map((num: any, i: any) => {
    let width = 1000 / numbers.length
    let height = (num / maxNum) * 100
    let stateA = groupA.includes(i)
    let stateB = groupB.includes(i)
    let stateC = groupC.includes(i)
    let stateD = groupD.includes(i)
    let sorted = sortedIndices.includes(i)

    // console.log(width, height)

    let margin = i === numbers.length ? '0' : width > 3 ? '0.1rem' : '0.025rem'
    return (
      <Bar
        key={`${i}_${num}`}
        width={width}
        height={height}
        val={width > 4 ? num : null}
        stateA={stateA}
        stateB={stateB}
        stateC={stateC}
        stateD={stateD}
        sorted={sorted}
        style={{ marginRight: `${margin}` }}
      />
    )
  })
}

const SortChart = ({
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices
}: any) => {
  const styles = useStyles()
  return (
    <Box sx={styles}>
      <div className="SortChart">
        {getListOfBars(
          numbers,
          maxNum,
          groupA,
          groupB,
          groupC,
          groupD,
          sortedIndices
        )}
      </div>
    </Box>
  )
}

export default SortChart
