import "@/styles/globals.css";
import'./inner/style.scss'
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <> <Provider store={store}>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      </Provider>
    </>
  );
}
