/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import { useStore } from "../store/store";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	// const store = useStore(pageProps.initialReduxState);

	return (
		// <Provider store={store}>
		<Component {...pageProps} />
		// </Provider>
	);
}
