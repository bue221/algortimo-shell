/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import { MainLayout } from 'components/layouts'
import { Item } from 'components/UI/Item'
import SortChart from 'components/UI/SortView'
import ShellSort from 'feature/shellSort/algoritmit'
import { Reorder } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { NextPageWithLayout } from './_app'

const Animation: NextPageWithLayout = () => {
  const [items, setItems] = useState([4, 3, 1, 2, 3, 1, 2, 12, 2, 1, 2, 22])
  const [state, setState] = useState<any>({
    trace: [],
    traceStep: -1,

    originalArray: [],
    array: [],
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    sortedIndices: [],

    timeoutIds: [],
    playbackSpeed: 1
  })

  const [change, setChange] = useState(false)

  const onClickStart = () => {
    const trace: any = ShellSort(items)
    setState((prev: any) => ({ ...state, array: items, trace }))
    run(trace)
  }

  const _changeVisualState = (visualState: any) => {
    setState({
      ...state,
      array: visualState.array,
      groupA: visualState.groupA,
      groupB: visualState.groupB,
      groupC: visualState.groupC,
      groupD: visualState.groupD,
      sortedIndices: visualState.sortedIndices
    })
  }

  const clearTimeouts = () => {
    console.log(state.timeoutIds)
    // state.timeoutIds?.forEach((timeoutId: any) => clearTimeout(timeoutId))
    // setState({ ...state, timeoutIds: [] })
  }

  const run = (trace: any) => {
    const timeoutIds: any = []
    const timer = 250 / state.playbackSpeed
    // Set a timeout for each item in the trace
    trace.forEach((item: any, i: number) => {
      let timeoutId = setTimeout(
        (item) => {
          setState((prevState: any) => ({
            ...state,
            traceStep: prevState.traceStep + 1
          }))
          _changeVisualState(item)
        },
        i * timer,
        item
      )
      timeoutIds.push(timeoutId)
    })
    // Clear timeouts upon completion
    let timeoutId = setTimeout(clearTimeouts, trace.length * timer)
    timeoutIds.push(timeoutId)
    setState({ ...state, timeoutIds })
  }

  console.log(state)
  return (
    <Container sx={{ py: 3 }}>
      <Reorder.Group axis="x" onReorder={setItems} values={items}>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Reorder.Group>
      <Button onClick={onClickStart}>start animation</Button>
      <Box sx={{ width: '100%', height: '100%' }}>
        <SortChart
          numbers={state.array}
          maxNum={Math.max(...(state?.array ?? []))}
          groupA={state.groupA}
          groupB={state.groupB}
          groupC={state.groupC}
          groupD={state.groupD}
          sortedIndices={state.sortedIndices}
        />
      </Box>
    </Container>
  )
}

Animation.getLayout = (page: any) => {
  return (
    <MainLayout title="inicio" description="algoritmo shell sort en typescript">
      {page}
    </MainLayout>
  )
}

export default Animation
