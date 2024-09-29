import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <h className="flex justify-center text-3xl font-bold">Home Page</h>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
