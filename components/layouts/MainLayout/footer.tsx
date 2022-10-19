/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://shellsort.netlify.app/">
        shellsort.netlify.app
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  )
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', textAlign: 'center' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" textAlign="center">
              Hecho por Andres Camilo Plaza ❤️🥺{' '}
              <Link
                href="https://github.com/bue221"
                rel="sponsored"
                target="_blank"
                title="Freepik"
              >
                GITHUB
              </Link>{' '}
              <Link
                href="https://happy-mclean-69df89.netlify.app/"
                target="_blank"
                rel="sponsored"
                title="Flaticon"
              >
                Portafolio
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
