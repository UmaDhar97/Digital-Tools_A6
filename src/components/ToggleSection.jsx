import React from "react";
import ProductCard from "./ProductCard";
import CartSection from "./CartSection";

function ToggleSection({
  activeSection,
  setActiveSection,
  products,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  handleCheckout,
}) {
  return (
    <section className="py-20 px-4 md:px-10 bg-base-200">
      <div className="max-w-7xl mx-auto text-center">

        
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        
        <div className="flex justify-center gap-4 mb-12">
          <button
  onClick={() => setActiveSection("products")}
  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
    ${
      activeSection === "products"
        ? "text-white bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#7C3AED] shadow-lg"
        : "border border-gray-300 text-gray-600 hover:bg-gradient-to-r hover:from-[#4F46E5] hover:via-[#6366F1] hover:to-[#7C3AED] hover:text-white"
    }
  `}
>
  Products
</button>

          <button
            onClick={() => setActiveSection("cart")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
              ${
                activeSection === "cart"
                  ? "text-white bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#7C3AED] shadow-lg"
        : "border border-gray-300 text-gray-600 hover:bg-gradient-to-r hover:from-[#4F46E5] hover:via-[#6366F1] hover:to-[#7C3AED] hover:text-white"
              }
            `}
          >
            Cart
          </button>
        </div>

        
        {activeSection === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <CartSection
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleCheckout={handleCheckout}
          />
        )}
      </div>
    </section>
  );
}

export default ToggleSection;