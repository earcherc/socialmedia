/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
