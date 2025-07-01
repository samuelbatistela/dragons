import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/io/redux/store';

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Dragons</title>
    </Head>

    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} key={router.route} />
      </PersistGate>
    </Provider>
  </>
);

export default MyApp;
