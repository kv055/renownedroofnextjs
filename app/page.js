import LandingPage from "./Sites/LandingPage";
import Header from "./Sites/NavigationHeader";
// import Services from "./Sites/ServicesPage";
import Services from "./Sites/ServicesPageNOTAB";
import About from "./Sites/AboutPage";
import Contact from "./Sites/ContactFooter";
import Logo from '../public/RenownedLOGO.svg';

export default function Home() {
  return (
    <main className="xl:px-36 xl:py-10 md:px-2 md:py-2 text-sky-900 xl:leading-10 md:leading-normal">
      <Header className=''></Header>
      <LandingPage className='' id='home'></LandingPage>
      <Services className='' id='services'></Services>
      <About className='' id='about'></About>
      <Contact className='' id='contact'></Contact>
    </main>
  );
}
