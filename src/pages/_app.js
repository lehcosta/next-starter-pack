import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styled/theme'
import { GlobalStyle } from '../styled/globalStyle'

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default CustomApp
