import React from 'react';

const CartList = ({ cartItems, handleRemove, handleCheckout }) => {
  

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h3>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Your cart is currently empty.
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg p-2 shadow-sm">
                     <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-sm font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

       
          <div className="flex justify-between items-center py-4 mb-4">
            <span className="text-gray-500 font-medium">Total:</span>
            <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
          </div>

          <button 
            onClick={handleCheckout}
            className="w-full py-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-lg transition-colors"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartList;