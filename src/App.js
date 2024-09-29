import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
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
