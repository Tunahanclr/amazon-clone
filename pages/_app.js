import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout from '@/layout/layout'
import store from '@/redux/store'
import { Provider } from 'react-redux'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return ( 
  <Provider store={store}>
  <SessionProvider session={session}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  </Provider>

  )
}