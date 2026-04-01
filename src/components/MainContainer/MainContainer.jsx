import React, { useState } from 'react';
import ProductList from '../Products/ProductList';
import CartList from '../Cart/CartList';

const MainContainer = ({ products, cartItems, handleAddToCart, handleRemoveFromCart, handleCheckout }) => {
  const [activeTab, setActiveTab] = useState('products'); // ডিফল্ট 'products'

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500 text-sm md:text-base">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center items-center gap-2 mb-12">
        <button 
          onClick={() => setActiveTab('products')}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'products' ? 'bg-[#8B5CF6] text-white' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab('cart')}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'cart' ? 'bg-[#8B5CF6] text-white' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeTab === 'products' ? (
        <ProductList products={products} cartItems={cartItems} handleAddToCart={handleAddToCart} />
      ) : (
        <CartList cartItems={cartItems} handleRemove={handleRemoveFromCart} handleCheckout={handleCheckout} />
      )}
    </section>
  );
};

export default MainContainer;