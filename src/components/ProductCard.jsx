import React from "react";

function ProductCard({ product, handleAddToCart, cart }) {

  const isAdded = cart.some(item => item.id === product.id);

  const onBuyNow = () => {
    handleAddToCart(product);
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case "Popular":
        return "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white";
      case "Best Seller":
        return "bg-gradient-to-r from-green-400 to-green-500 text-white";
      case "New":
        return "bg-gradient-to-r from-blue-400 to-blue-500 text-white";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl hover:scale-[1.02] transition duration-300">
      <div className="card-body">

        <div className="flex justify-between items-center">
          <img
            src={product.icon}
            alt={product.name}
            className="w-12 h-12 object-contain"
          />

          <span className={`badge ${getTagColor(product.tagType)}`}>
            {product.tagType}
          </span>
        </div>

        <h2 className="card-title text-xl mt-2 text-left">
          {product.name}
        </h2>

        <p className="text-gray-600 text-left">
          {product.description}
        </p>

        <div className="mt-3 text-left">
          <p className="text-2xl font-bold text-primary">
            ${product.price}
            <span className="text-sm text-gray-500 ml-1">
              / {product.period}
            </span>
          </p>
        </div>

        <div className="mt-4 text-left">
          <ul className="space-y-1 text-sm text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>
        </div>

        <div className="card-actions mt-6">
          <button
  onClick={onBuyNow}
  disabled={isAdded}
  className={`w-full btn ${
    isAdded
      ? "bg-gradient-to-r from-green-400 to-green-600 text-white cursor-not-allowed"
      : "btn-primary"
  }`}
>
  {isAdded ? "Added to Cart" : "Buy Now"}
</button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;