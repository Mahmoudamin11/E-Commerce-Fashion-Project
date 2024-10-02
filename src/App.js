import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Popup from "./utilities/PopUp";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Popup />
      <Footer />
    </div>
  );
}
export default App;
