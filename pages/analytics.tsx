import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material'
import { iteratorMethod, shellSortMethod } from 'utility/functions'
import { MainLayout } from '../components/layouts'
import { NextPageWithLayout } from './_app'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import CustomTable, { createData } from 'components/UI/CustomTable'
import { Stack } from '@mui/system'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { LoadingButton } from '@mui/lab'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface IForm {
  typeData: string
  start: number
  iter: number
  avance: number
}

const Home: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      typeData: 'aleatorio',
      start: 10,
      iter: 10,
      avance: 10
    }
  })

  const [experimentalData, setExperimentalData] = useState({
    times: [],
    dataIteration: []
  })
  const [loading, setLoading] = useState(false)
  const onSubmit = async (data: IForm) => {
    setLoading(true)
    try {
      const info = await iteratorMethod(
        data.iter,
        data.avance,
        data.start,
        (data) => shellSortMethod(data)
      )
      setExperimentalData(info as any)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Representacion computacional O(n)'
      }
    }
  }

  const labels = experimentalData.dataIteration

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: experimentalData.times,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }
  const rowsData = Array.from(
    { length: experimentalData.times.length },
    (_, index) =>
      createData(
        index,
        experimentalData.dataIteration[index],
        experimentalData.times[index]
      )
  )

  return (
    <Container>
      <Box>
        <Typography variant="h1" textAlign="center" fontWeight="bold">
          Shell sort
        </Typography>
        <Typography variant="h4" textAlign="center">
          ... Analisis computacional ....
        </Typography>
        <Stack my={6} onSubmit={handleSubmit(onSubmit)} component="form">
          <Typography textAlign="center" fontWeight="bold" variant="h6">
            Configuración datos:
          </Typography>
          <Stack
            gap={2}
            justifyContent="space-between"
            flexDirection={{ xs: 'column', md: 'row' }}
            my={2}
            spacing={3}
          >
            <FormControl>
              <FormLabel id="typeData">Tipo de datos</FormLabel>
              <RadioGroup
                aria-labelledby="typeData"
                defaultValue="aleatorio"
                {...register('typeData')}
              >
                <FormControlLabel
                  value="aleatorio"
                  control={<Radio />}
                  label="Data aleatoria"
                />
                <FormControlLabel
                  value="archivo"
                  disabled
                  control={<Radio />}
                  label="Data de archivo"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              {...register('start')}
              type="number"
              variant="outlined"
              color="primary"
              label="Valor de inicio"
              placeholder="Ingrese el valor de inicio"
            />
            <TextField
              {...register('iter')}
              type="number"
              variant="outlined"
              color="primary"
              label="Iteraciones"
              placeholder="Ingrese el numero de iteraciones"
            />
            <TextField
              {...register('avance')}
              type="number"
              variant="outlined"
              color="primary"
              label="Avance por iteraciones"
              placeholder="Ingrese el avance por iteraciones"
            />
          </Stack>
          <LoadingButton type="submit" variant="contained" loading={loading}>
            Ejecutar algoritmo
          </LoadingButton>
        </Stack>
        {experimentalData.times.length > 0 &&
          experimentalData.dataIteration.length > 0 && (
            <>
              <Stack spacing={4} pb={4}>
                <Line options={options} data={data} />
                <CustomTable rows={rowsData} />
              </Stack>
            </>
          )}
      </Box>
    </Container>
  )
}

Home.getLayout = (page: any) => {
  return (
    <MainLayout title="inicio" description="algoritmo shell sort en typescript">
      {page}
    </MainLayout>
  )
}

export default Home
