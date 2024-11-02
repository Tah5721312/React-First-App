
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
       <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>
<Header />

<MainContent aaa="Home" Designer="Mohamed Abdel Fatah" />


  <Footer />
</>
  );
}

export default Home;
