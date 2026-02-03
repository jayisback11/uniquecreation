import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Context
import { CartProvider } from "./context/CartContext";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartSheet from "./components/layout/CartSheet";
import MobileBookButton from "./components/layout/MobileBookButton";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/ShopPage";
import GalleryPage from "./pages/GalleryPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <CartProvider>
      <div className="App font-body">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <CartSheet />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booknow" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <MobileBookButton />
          <Toaster position="top-right" />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
