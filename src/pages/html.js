

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import { Helmet } from "react-helmet-async";


const Html = () => {
  return (
    <>
      
       <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLlllllllllllllll" />
      </Helmet>
<Header />
<MainContent aaa="Html" Designer="Tah57"/>

  <Footer />
</>
  );
}

export default Html;
