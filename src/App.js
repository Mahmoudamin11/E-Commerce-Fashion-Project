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
import { Toaster } from "react-hot-toast";
import ChangePassword from "./Auth/ChangePassword/ChangePassword"

function App() {
  return (
    <div className="App">
      <Toaster />
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
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>
      <Popup />
      <Footer />
    </div>
  );
}
export default App;
