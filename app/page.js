import LandingPage from "./Sites/LandingPage";
import Header from "./Sites/NavigationHeader";
import Services from "./Sites/ServicesPage";
import About from "./Sites/AboutPage";
import Contact from "./Sites/ContactFooter";

export default function Home() {
  return (
    <main className="flex flex-col px-36 py-10 text-sky-900 leading-10">
        <Header className=''></Header>
        <LandingPage className=''></LandingPage>
        <Services className=''></Services>
        <About className=''></About>
        <Contact className=''></Contact>
    </main>
  );
}
