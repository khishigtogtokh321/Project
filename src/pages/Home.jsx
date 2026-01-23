import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Freatures from "../components/Features";
import PaymentStore from "../components/PaymentStore";
import ActiveCustomers from "../components/ActiveCustomers";
import HowToBook from "../components/HowToBook";
import ExpertsSection from "../components/ExpertsSection";
import FeaturesSection from "../components/FeaturesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import DoctorsStats from "../components/DoctorsStats";

export default function Home() {
  return (
    <>
      <Hero />
      <HowToBook />
      <ExpertsSection />
      <FeaturesSection />
      <WhyChooseUs />
      <DoctorsStats />
      <ActiveCustomers />
      <About />      
   
    </>
  );
}
