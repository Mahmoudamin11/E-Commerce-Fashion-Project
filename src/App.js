import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Popup from "./utilities/PopUp";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";

import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Payment from "./Pages/Payment/Payment";

import Wishlist from "./Pages/wishlist/Wishlist";
import AboutUS from "./Pages/About US/AboutUS";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutUS" element={<AboutUS />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/cart/checkout/payment" element={<Payment />} />

        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Popup />
      <Footer />
    </div>
  );
}
export default App;
