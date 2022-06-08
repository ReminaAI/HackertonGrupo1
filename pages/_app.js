import { useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Layout>
      <Component loggedIn={loggedIn} setLoggedIn={setLoggedIn} {...pageProps} />
    </Layout>
  )
}

export default MyApp
