import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Freatures from "../components/Features";
import PaymentStore from "../components/PaymentStore";
import ActiveCustomers from "../components/ActiveCustomers";

export default function Home() {
  return (
    <>
      <Hero />
      <Freatures />
      <About />      
      <ActiveCustomers />
      <Contact />
    </>
  );
}
