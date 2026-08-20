import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Volunteer from "./pages/Volunteer";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
   
        <Route path="/volunteer" element={<Volunteer />} />
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;