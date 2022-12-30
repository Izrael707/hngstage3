import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Place from "./pages/Place";

const App = () => {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
