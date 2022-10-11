import { Button, Stack, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { MainLayout } from 'components/layouts'
import React, { useState } from 'react'
import { NextPageWithLayout } from './_app'

const GenerateArrays: NextPageWithLayout = () => {
  const [csvData, setCsvData] = useState<Array<number>>([])
  const [size, setSize] = useState(0)

  const handleChange = (e: any) => setSize(e.target.value)

  const generateRandomArray = (sizeArray: number) => {
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * Math.floor(max)) + 1
    }
    const array = Array(sizeArray)
      .fill(0)
      .map(() => getRandomInt(sizeArray * 5))
    setCsvData(array)
    console.log(array)

    // Format the CSV string
  }
  const csv = csvData.join('\n')
  const data = encodeURI('data:text/csv;charset=utf-8,' + csv)

  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" gap={2} height="100vh">
        <Typography variant="h3" fontWeight={800} mb={4}>
          Generar csv de numeros aleatorios
        </Typography>
        <TextField
          label="Tamaño del array"
          value={size}
          onChange={handleChange}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() => generateRandomArray(Number(size))}
        >
          Generar data
        </Button>
        {csvData.length > 0 && (
          <Button
            color="error"
            variant="contained"
            component="a"
            href={data}
            download={`csv_${csvData.length}_datos.csv`}
          >
            Descargar Data
          </Button>
        )}
      </Stack>
    </Container>
  )
}

GenerateArrays.getLayout = (page: any) => {
  return (
    <MainLayout title="inicio" description="algoritmo shell sort en typescript">
      {page}
    </MainLayout>
  )
}

export default GenerateArrays
