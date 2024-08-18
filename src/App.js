
import Banner from "./Banner/Banner";
import Feedback from "./Feedback/TestimonialCard";
//import NavBar from "./NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logos from "./logos/Logos";
import BrandzparkServices from "./Services/BrandzparkServices";
import RecentWorks from "./RecentWorks/RecentWorks";
import Display from "./Display/Display";
import OurPartners from "./OurPartners/OurPartners";
import ContactUs from "./ContactUs/ContactUs";
import TestimonialCard from "./Feedback/TestimonialCard";
import "./App.css";
import Footer from "./Footer/Footer";
import Testimonials from "./Feedback/Testimonals";

function App() {
  return (
    <div className="App">
      <Banner />
    <Logos/>
    <BrandzparkServices/>
<RecentWorks/>
<Display/>
<OurPartners/>
<Testimonials />
<ContactUs/>
<Footer/>
    </div>
  );
}

export default App;
