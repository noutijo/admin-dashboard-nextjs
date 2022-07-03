import 'styles/globals.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from 'next/app';
import { wrapper } from '@app/store';
import Layout from '@components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return  (
   <Layout>
    <Component {...pageProps} /> 
   </Layout>
  )
}

//export default MyApp;
export default wrapper.withRedux(MyApp);
