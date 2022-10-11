/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { MainLayout } from 'components/layouts'
import App from 'components/UI/Data'
import ProgressTopBar from 'components/UI/ProgressTopBar'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Container sx={{ mb: 10 }}>
        <ProgressTopBar />
        <AnimatePresence>
          <Typography variant="h3" textAlign="center" mt={3}>
            <code>¿Qué es shell sort?</code>
          </Typography>
        </AnimatePresence>
        <Typography variant="body1" textAlign="center" mt={2}>
          El método de{' '}
          <Link
            href="https://es.wikipedia.org/wiki/Ordenamiento_Shell"
            target="_blank"
          >
            ordenamiento Shell
          </Link>{' '}
          (Shell sort en inglés) es un algoritmo de ordenamiento. El método se
          denomina Shell en honor de su inventor Donald Shell. Su implementación
          original, requiere O(n2) comparaciones e intercambios en el peor caso.
          Un cambio menor presentado en el libro de V. Pratt produce una
          implementación con un rendimiento de O(n log2 n) en el peor caso. Esto
          es mejor que las O(n2) comparaciones requeridas por algoritmos simples
          pero peor que el óptimo O(n log n). Aunque es fácil desarrollar un
          sentido intuitivo de cómo funciona este algoritmo, es muy difícil
          analizar su tiempo de ejecución. El Shell sort es una generalización
          del ordenamiento por inserción, teniendo en cuenta dos observaciones:
          El ordenamiento por inserción es eficiente si la entrada está "casi
          ordenada". El ordenamiento por inserción es ineficiente, en general,
          porque mueve los valores solo una posición cada vez. El Algoritmo
          Shell sort mejora el ordenamiento por inserción comparando elementos
          separados por un espacio de varias posiciones. Esto permite que un
          elemento haga "pasos más grandes" hacia su posición esperada. Los
          pasos múltiples sobre los datos se hacen con tamaños de espacio cada
          vez más pequeños. El último paso del Shell sort es un simple
          ordenamiento por inserción, pero para entonces, ya está garantizado
          que los datos del vector están casi ordenados.
        </Typography>
        <Typography variant="h3" textAlign="center" mt={3}>
          Curiosidades
        </Typography>
        <App />
      </Container>
    </>
  )
}

HomePage.getLayout = (page: any) => {
  return (
    <MainLayout title="inicio" description="algoritmo shell sort en typescript">
      {page}
    </MainLayout>
  )
}

export default HomePage
