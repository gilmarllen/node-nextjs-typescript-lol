import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.scss'

const APP_NAME = 'Champions LoL Dashboard'
const APP_DESCRIPTION = 'Information of the League of Legend Champions - https://github.com/gilmarllen/node-nextjs-typescript-lol'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:description" content={APP_DESCRIPTION} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}