import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";

// NEW PAGES
import WeddingSets from "./pages/WeddingSets";
import RentalSpaces from "./pages/RentalSpaces";
import PreMadeSets from "./pages/PreMadeSets";
import Props from "./pages/Props";
import ProductionServices from "./pages/ProductionServices";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />

          {/* NEW ROUTES */}
          <Route path="/wedding-sets" element={<WeddingSets />} />
          <Route path="/rental-spaces" element={<RentalSpaces />} />
          <Route path="/pre-made-sets" element={<PreMadeSets />} />
          <Route path="/props" element={<Props />} />
          <Route path="/production-services" element={<ProductionServices />} />
          <Route path="/contact" element={<Contact />} />

          {/* OPTIONAL: 404 PAGE */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen text-center">
                <h1 className="text-3xl font-bold">Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;