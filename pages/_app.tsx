import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import {lightTheme,darkTheme,GlobalStyles } from '../utils/ThemeConfig'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark'|'light'>('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return(

    <ThemeProvider theme={theme == 'light' ? lightTheme: darkTheme}>
      <Head>
        <title>E-Metric Suite Solution</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta property='og:title' content="      
Increase your business growth advantage with our One-Stop HR management solution, without leaving anything undone in an effortless manner.
      " />
        <meta name='description' content="
Planning to work or already working remotely... Be it that you are about that commence remote/hybrid work or you're already doing that, E-Metric Suite Solution helps in achieving the best of result doing that.
  "  />
      </Head>
      <ToastContainer/>


      <GlobalStyles/>
      <NextNProgress />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Component {...pageProps} />

    </ThemeProvider> 
  )
}

export default MyApp
