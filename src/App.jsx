import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import CalendarPage from "./pages/CalendarPage";
import Login from "./pages/Login";
import AppointmentForm from "./pages/AppointmentForm";
import PaymentUI from "./pages/PaymentUI";
import AppointmentPage from "./pages/AppointmentPage";
import RegisterPage from "./pages/RegisterPage";
import ServiceChose from "./pages/ServiceChose";
import AppointmentHistory from "./pages/AppointmentHistory";
import AuthPage from "./pages/AuthPage";
import "react-big-calendar/lib/css/react-big-calendar.css";



export default function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/emch-songoh" element={<Booking />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service-chose" element={<ServiceChose />} />
        <Route path="/uilcluulegciin-medeelel" element={<AppointmentForm />} />
        <Route path="/_payment" element={<PaymentUI />} />
        <Route path="/tsag-awaltiin-medeelel" element={<AppointmentPage />} />
        <Route path="/tuuh" element={<AppointmentHistory />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
