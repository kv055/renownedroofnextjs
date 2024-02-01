import LandingPage from "./Sites/LandingPage";
import Header from "./Sites/NavigationHeader";
import Services from "./Sites/ServicesPage";
import About from "./Sites/AboutPage";
import Contact from "./Sites/ContactFooter";

export default function Home() {
  return (
    <main className="xl:px-36 xl:py-10 md:px-2 md:py-2 text-sky-900 xl:leading-10 md:leading-normal">
        <Header className=''></Header>
        <LandingPage className=''></LandingPage>
        <Services className=''></Services>
        <About className=''></About>
        <Contact className=''></Contact>
    </main>
  );
}
