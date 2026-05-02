import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import EventAesthetics from "./components/EventAesthetics";
import StoriesInStyle from "./components/StoriesInStyle";
import AboutUs from "./components/AboutUs";
import GetAQuote from "./components/GetAQuote";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurServices />
      <EventAesthetics />
      <StoriesInStyle />
      <AboutUs />
      <GetAQuote />
      <Footer />
    </div>
  );
}