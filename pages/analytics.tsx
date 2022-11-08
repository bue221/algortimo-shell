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
import { iteratorMethod, iteratorMethodWithImportData } from 'utility/functions'
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
import Papa from 'papaparse'
import { useSort } from 'context/sortMethods'

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

const AnalyticsPage: NextPageWithLayout = () => {
  const {
    state: { title, methodAnalitycs }
  } = useSort()
  const { register, handleSubmit, watch } = useForm<IForm>({
    defaultValues: {
      typeData: 'aleatorio',
      start: 1000,
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
      const info =
        watch('typeData') != 'aleatorio'
          ? await iteratorMethodWithImportData(data1, (data) =>
              methodAnalitycs(data)
            )
          : await iteratorMethod(data.iter, data.avance, data.start, (data) =>
              methodAnalitycs(data)
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
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value: any) {
            return value + ' ms'
          }
        }
      }
    }
  }

  const labels = experimentalData.dataIteration

  const data = {
    labels,
    datasets: [
      {
        label: 'Datos aleatorios',
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
  const [data1, setData] = useState<any>([])
  return (
    <Container maxWidth="xl">
      <Box width="100%">
        <Typography variant="h1" textAlign="center" fontWeight="bold">
          {title}
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
                  control={<Radio />}
                  label="Data de archivo"
                />
              </RadioGroup>
            </FormControl>
            {watch('typeData') == 'aleatorio' ? (
              <>
                <TextField
                  {...register('start')}
                  InputProps={{ inputProps: { min: 1000, max: 10000 } }}
                  type="number"
                  variant="outlined"
                  color="primary"
                  label="Valor de inicio"
                  placeholder="Ingrese el valor de inicio"
                />
                <TextField
                  InputProps={{ inputProps: { min: 10, max: 50 } }}
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
                  InputProps={{ inputProps: { min: 1000, max: 10000 } }}
                  variant="outlined"
                  color="primary"
                  label="Avance por iteraciones"
                  placeholder="Ingrese el avance por iteraciones"
                />
              </>
            ) : (
              <Button variant="contained" component="label">
                Subir archivos csv
                <input
                  hidden
                  accept="text/csv"
                  multiple
                  type="file"
                  onChange={async (e) => {
                    if (e.target.files && e.target.files[0]) {
                      const allFilesData: any = []
                      for (let i = 0; i <= e.target.files.length - 1; i++) {
                        const reader = new FileReader()
                        const file = e.target.files[i]
                        reader.onload = async ({ target }) => {
                          const csv: any = Papa.parse(target?.result as any, {
                            header: false
                          })
                          const parsedData = csv?.data
                          const columns = parsedData.map((i: any) =>
                            Number(i[0])
                          )
                          // console.log(columns)
                          allFilesData.push(columns)
                          setData(
                            allFilesData.sort(
                              (a: Array<any>, b: Array<any>) =>
                                a.length - b.length
                            )
                          )
                        }
                        reader.readAsText(file)
                      }
                    }
                  }}
                />
              </Button>
            )}
          </Stack>
          <LoadingButton
            disabled={watch('typeData') != 'aleatorio' && data1.length == 0}
            type="submit"
            variant="contained"
            loading={loading}
          >
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

AnalyticsPage.getLayout = (page: any) => {
  return (
    <MainLayout
      title="Analisis computacional"
      description="Analisis computacional a algoritmos de ordenamiento"
    >
      {page}
    </MainLayout>
  )
}

export default AnalyticsPage
