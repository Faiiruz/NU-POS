import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>NU POS</title>
    </Head>
    <ThemeProvider enableSystem={true} attribute='class'  >
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}
