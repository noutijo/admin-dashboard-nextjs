import 'styles/globals.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from 'next/app';
import Layout from '@components/layout/Layout';
import { AppMenuProvider } from '@hooks/AppMenuProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppMenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppMenuProvider>
  );
}

//export default MyApp;
export default MyApp;
