import "../styles/globals.css";
import "../styles/ajouterPersonnel.css";
import "../components/Header/Header.css";
import "../styles/personnel.css";
import "../styles/Home.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
