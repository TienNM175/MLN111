import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import QuizSection from "./components/QuizSection";
import Footer from "./components/Footer";
import EraDetail from "./pages/EraDetail"; 
import PhilosophyChatBoxGemini from "./components/PhilosophyChatBoxGemini";

function App() {
  return (
    <Router>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />

        <Routes>
          {/* Trang chính */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TimelineSection />
                <QuizSection />
              </>
            }
          />

          {/* Trang chi tiết thời kỳ */}
          <Route path="/era/:eraId" element={<EraDetail/>} />
        </Routes>
        <PhilosophyChatBoxGemini />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
