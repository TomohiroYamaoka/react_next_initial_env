import React from 'react'
import 'sanitize.css'
import { AppProps } from 'next/app'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
