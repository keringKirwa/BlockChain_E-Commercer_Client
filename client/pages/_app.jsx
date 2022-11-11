import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import Scroll from "../Components/Scroll";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
      <Scroll />
    </Layout>
  );
}

export default MyApp;
