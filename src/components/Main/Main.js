import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main ({ isDesktop, isLoggedIn}) {
  return (
    <>
      <Header
        isDesktop={isDesktop}
        isLoggedIn={isLoggedIn}/>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  )
}

export default Main;
