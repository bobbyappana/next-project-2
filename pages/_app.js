import { Fragment } from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import Header from './Header'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>News App</title>
        <meta name='Description' content='world wide news' />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
