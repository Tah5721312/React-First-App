

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import { Helmet } from "react-helmet-async";


const Css = () => {
  return (
    <>
    <Helmet>
    <title>CSS Page</title>
    <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>
  <Header />

  <MainContent aaa="Css" Designer="Tah57"/>

  <Footer />
</>
  );
}

export default Css;
