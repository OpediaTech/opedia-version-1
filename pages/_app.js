import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/default.css";
import "../styles/globals.css";
import "../styles/responsive.css";
import Layout from "../components/Layout";
import dynamic from 'next/dynamic'
import { server } from "../config";
const Navbar = dynamic(
  () => import('../components/Navbar'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  }
)
function MyApp({ Component, pageProps, categories,trainings}) {
  return (
    <Layout>
      <Navbar categories={categories} trainings={trainings} />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;

MyApp.getInitialProps = async () => {
  const res = await fetch(`${server}/api/cat-to-service`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': '*',
        },
      });
      const categories = await res.json();
   
  const resTraining = await fetch(`${server}/api/course`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': '*',
        },
      });

    const trainings = await resTraining.json();
   
  return {  categories,trainings,}
}