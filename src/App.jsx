import "./App.css";
// compomentes
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// paginas
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Filter from "./Pages/Filter/Filter";
import Error from "./Pages/Error/Error";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="*" element={<Error />} />

          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;
