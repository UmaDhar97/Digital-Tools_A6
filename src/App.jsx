import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import productsData from "./data/product.json";
import { ToastContainer, toast } from "react-toastify";
import SimplePricingSection from "./components/SimplePricingSection";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [activeSection, setActiveSection] = useState("products");

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning(`${product.name} is already in cart!`);
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (id) => {
    const removedItem = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.info(`${removedItem.name} removed from cart!`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is already empty!");
      return;
    }

    setCart([]);
    toast.success("Proceed to checkout successful!");
  };

  return (
  <div className="bg-base-100 text-base-content min-h-screen">
    <Navbar cartCount={cart.length} />
    <Banner />
    <Stats />

    <ToggleSection
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      products={products}
      cart={cart}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
      handleCheckout={handleCheckout}
    />

    <StepsSection />
   <SimplePricingSection />
    <PricingSection />
    <Footer />

    <ToastContainer position="top-right" autoClose={2000} />
  </div>
);
}

export default App;