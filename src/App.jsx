import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WorkFlowpage from "./components/WorkFlowpage";
import PricingPage from "./components/PricingPage";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features />
        <WorkFlowpage />
        <PricingPage />
        <Footer />
      </div>
    </div>
  );
};

export default App;
