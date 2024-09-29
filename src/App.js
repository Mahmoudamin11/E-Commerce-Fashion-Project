import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="navbar" element={<Navbar />} />
        <Route
          path="/"
          element={
            <h className="flex justify-center text-3xl font-bold">Home Page</h>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
