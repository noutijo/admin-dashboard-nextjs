import 'styles/globals.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from 'next/app';
import { wrapper } from '@app/store';
import Layout from '@components/layout/Layout';
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script src="/theme.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </Layout>
  );
}

//export default MyApp;
export default wrapper.withRedux(MyApp);
