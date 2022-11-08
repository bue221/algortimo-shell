/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { MainLayout } from 'components/layouts'
import App from 'components/UI/Data'
import ProgressTopBar from 'components/UI/ProgressTopBar'
import { useSort } from 'context/sortMethods'
import { AnimatePresence } from 'framer-motion'

import React from 'react'
import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  const {
    state: { title, description },
    dispatch
  } = useSort()

  return (
    <>
      <Container sx={{ mb: 10 }}>
        <ProgressTopBar />
        <AnimatePresence>
          <Typography variant="h3" textAlign="center" my={3}>
            <code>¿Qué es {title}?</code>
          </Typography>
        </AnimatePresence>
        {description.description}
        <Stack>
          <Typography variant="h4" fontWeight={800} textAlign="center" mt={3}>
            Coste computacional
          </Typography>
          <Stack
            mt={2}
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Typography variant="subtitle1">
              <strong>Promedio: </strong>
              {description.avgCase}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Mejor caso: </strong>
              {description.bestCase}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Peor caso: </strong>
              {description.worstCase}
            </Typography>
          </Stack>
        </Stack>
        {title == 'Shell sort' && (
          <>
            <Typography variant="h2" textAlign="center" mt={5}>
              Curiosidades
            </Typography>
            <App />
          </>
        )}
      </Container>
    </>
  )
}

HomePage.getLayout = (page: any) => {
  return (
    <MainLayout title="inicio" description="Analisis computacional con react">
      {page}
    </MainLayout>
  )
}

export default HomePage
