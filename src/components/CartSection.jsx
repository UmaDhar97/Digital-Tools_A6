import React from "react";

function CartSection({ cart, handleRemoveFromCart, handleCheckout }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center bg-base-100 rounded-2xl p-10 shadow">
        <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
        <p className="text-gray-600">
          No products selected yet. Start adding your favorite digital tools.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-base-100 rounded-2xl shadow p-6">
      <h2 className="text-3xl font-bold mb-6">Selected Products</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-4"
          >
            <div className="flex items-center gap-4">

            
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-contain rounded-lg bg-gray-100 p-1"
              />

              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="btn btn-error btn-sm text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
          <p className="text-gray-500">Items: {cart.length}</p>
        </div>

        <button onClick={handleCheckout} className="btn btn-success text-white">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSection;