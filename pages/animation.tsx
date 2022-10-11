/* eslint-disable react-hooks/exhaustive-deps */
import {
  PauseCircleFilledRounded,
  PlayArrowRounded,
  SkipNext,
  SkipPrevious
} from '@mui/icons-material'
import {
  Container,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { MainLayout } from 'components/layouts'
import SortChart from 'components/UI/SortView'
import ShellSort from 'feature/shellSort/algoritmit'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { NextPageWithLayout } from './_app'

const Animation: NextPageWithLayout = () => {
  const [state, setState] = useState<any>({
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
  const [sizeArray, setSizeArray] = useState(15)
  const [trace, setTrace] = useState([])
  const [step, setStep] = useState(-1)
  const stop = useRef<any>(null)

  const generateRandomArray = () => {
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * Math.floor(max)) + 1
    }
    const array = Array(sizeArray)
      .fill(0)
      .map(() => getRandomInt(sizeArray * 5))
    setState({
      ...state,
      array
    })
    setStep(-1)
    stop.current = false
  }

  useEffect(() => {
    stop.current = false
    generateRandomArray()
  }, [])

  useEffect(() => {
    generateRandomArray()
  }, [sizeArray])

  const onClickStart = async () => {
    const traceData: any = ShellSort(state.array)
    setTrace(traceData)
    run(traceData)
  }

  function later(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay))
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

  const run = async (trace: any) => {
    const timer = 250 / state.playbackSpeed

    for (let i = 0; i <= trace.length - 1; i++) {
      let item = trace[i]

      if (stop.current) {
        break
      }

      await later(timer)

      setState((prevState: any) => ({
        ...prevState,
        traceStep: prevState.traceStep + 1
      }))
      _changeVisualState(item)
      setStep((prevCounter) => prevCounter + 1)
    }
    stop.current = true
  }

  const pause = () => {
    stop.current = true
  }

  const continueToRun = () => {
    const traceData = trace.slice(step)
    // setTrace(traceData)
    stop.current = false
    run(traceData)
  }

  const stepForward = () => {
    if (step < trace.length - 1) {
      const item = trace[step + 1]
      setStep(step + 1)
      _changeVisualState(item)
    }
  }

  const stepBackward = () => {
    if (step > 0) {
      const item = trace[step - 1]
      setStep(step - 1)
      _changeVisualState(item)
    }
  }

  return (
    <Container sx={{ py: 3 }}>
      <Typography textAlign="center" variant="h3" fontWeight="bold" mb={4}>
        Animación del metodo de ordenamiento shell
      </Typography>
      <Stack mb={10}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Tamaño del array
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sizeArray}
            label="Tamaño del array"
            onChange={(e) => setSizeArray(Number(e.target.value))}
          >
            {[15, 30, 45, 60, 75, 90, 105].map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
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
      <Stack
        flexDirection="row"
        justifyContent="center"
        gap={4}
        mt={2}
        alignItems="center"
      >
        <Fab
          color="primary"
          onClick={stepBackward}
          aria-label="Saltar hacia atras"
          disabled={step < 1}
        >
          <SkipPrevious />
        </Fab>
        <Fab
          disabled={step == -1 ? false : step == trace.length - 1}
          color="primary"
          onClick={
            stop.current === false
              ? step == -1
                ? onClickStart
                : pause
              : step !== -1
              ? continueToRun
              : () => {}
          }
          aria-label="ejecutar"
        >
          {stop.current === false ? (
            step == -1 ? (
              <PlayArrowRounded />
            ) : (
              <PauseCircleFilledRounded />
            )
          ) : step !== -1 ? (
            <PlayArrowRounded />
          ) : (
            <PlayArrowRounded />
          )}
        </Fab>
        <Fab
          disabled={step == trace.length - 1}
          color="primary"
          onClick={stepForward}
          aria-label="Saltar hacia delante"
        >
          <SkipNext />
        </Fab>
      </Stack>
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        gap={3}
        mt={5}
      >
        <Stack flexDirection="row" gap={2} alignItems="center">
          <Box width={30} height={30} bgcolor="primary.main" />
          <Typography>Comparación</Typography>
        </Stack>
        <Stack flexDirection="row" gap={2} alignItems="center">
          <Box width={30} height={30} bgcolor="secondary.main" />
          <Typography>Cambio</Typography>
        </Stack>
        <Stack flexDirection="row" gap={2} alignItems="center">
          <Box width={30} height={30} bgcolor="success.main" />
          <Typography>Ordenado</Typography>
        </Stack>
      </Stack>
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
