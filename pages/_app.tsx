import * as React from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import createEmotionCache from '../utility/createEmotionCache'
import lightThemeOptions from '../styles/theme/lightThemeOptions'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(lightThemeOptions)

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {getLayout(<Component {...pageProps} />)}
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
