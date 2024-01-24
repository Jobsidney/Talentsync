import './App.css';
import BottomBreadCrump from './components/BottomBreadCrump';
import CommentSection from './components/CommentSection';
import FAQS from './components/FAQS';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PartnerBrands from './components/PartnerBrands';
import WhyUsSection from './components/WhyUsSection';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="home">
      <Navbar/>
      <HeroSection/>
      <PartnerBrands/>
      <WhyUsSection/>
      <CommentSection/>
      <FAQS/>
      <BottomBreadCrump/>
      <Footer/>
    </div>
  );
}

export default App;
