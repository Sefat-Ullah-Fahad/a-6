import React from "react";
import { FiCheck } from "react-icons/fi";

const ProductList = ({ products, cartItems, handleAddToCart }) => {
  const getTagStyle = (type) => {
    switch (type) {
      case "best-seller":
        return "bg-yellow-100 text-yellow-700";
      case "popular":
        return "bg-purple-100 text-purple-700";
      case "new":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const isAdded = cartItems.find((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                <img
                  src={product.icon}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagStyle(product.tagType)}`}
              >
                {product.tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="text-2xl font-extrabold text-gray-900">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500 font-medium">
                /{product.period}
              </span>
            </div>

            <ul className="flex-grow space-y-2 mb-6 text-sm text-gray-600">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FiCheck className="text-green-500 text-lg flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleAddToCart(product)}
              disabled={isAdded}
              className={`w-full py-3 rounded-xl font-semibold transition-colors ${isAdded ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"}`}
            >
              {isAdded ? "Added to cart" : "Buy Now"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
