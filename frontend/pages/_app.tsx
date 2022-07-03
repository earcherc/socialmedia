/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from "react-redux";
import { useStore } from "../store/store";

export default function App({ Component, pageProps }: any) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
