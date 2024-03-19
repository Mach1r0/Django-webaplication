import { useEffect } from 'react'
import '../styles/globals.css'
import { AuthenticadorContextProvider } from '../context/AuthenticationContext'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
  <AuthenticadorContextProvider> 
      <Component {...pageProps} />
  </AuthenticadorContextProvider>)
}

export default MyApp
