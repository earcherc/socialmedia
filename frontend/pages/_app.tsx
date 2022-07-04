/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
