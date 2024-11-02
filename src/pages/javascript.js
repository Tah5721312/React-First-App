import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JAVASCRIPT Page</title>
        <meta name="description" content="JAVASCRIPTTTTTTTTTTTTTTTTTTTTT" />
        <style type="text/css">{`
   h1{
   color:aqua;
   }
 
        
    `}</style>
      </Helmet>
      <Header />
      <h1>Tahhhhhhhhhhhh1</h1>
      <MainContent aaa="JavaScript" Designer="Tah57" />

      <Footer />
    </>
  );
};

export default Javascript;
