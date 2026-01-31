import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address;
        setLocation(exactLocation);
        setOpenDropdown(false);
        // console.log(exactLocation);

      } catch (error) {
        console.log(error);

      }

    })
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        {/* Layout Route */}
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* </Route> */}

        {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
