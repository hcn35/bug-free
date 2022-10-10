import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
