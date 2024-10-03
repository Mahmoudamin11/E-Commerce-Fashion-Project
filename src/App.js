import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./Pages/wishlist/Wishlist";
import Popup from "./Pages/popup/Popup";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Popup />
      <Routes>
        <Route
          path="/"
          element={
            <h2 className="flex justify-center text-3xl font-bold">Home Page</h2>
          }
        />

        <Route
          path="/wishlist"
          element={
         <Wishlist/>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
