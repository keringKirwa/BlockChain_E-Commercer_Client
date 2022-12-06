import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import useSWR, { useSWRConfig } from "swr";

import { persistor, store } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import Scroll from "../Components/Scroll";
import { mainStore } from "../store/index.js";
import { Provider } from "react-redux";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

/*  the store must be in the same level as the redux store .the store is provided to the highest component in  the tree . */

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
          <Scroll />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
