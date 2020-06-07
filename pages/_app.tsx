import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.scss'

const APP_NAME = 'Champions LoL Dashboard'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}