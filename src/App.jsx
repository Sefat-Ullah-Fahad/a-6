import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Header/Navbar';
import Banner from './components/Hero/Banner';
import Stats from './components/home/Stats';
import MainContainer from './components/MainContainer/MainContainer'; // এটি ইম্পোর্ট করা হলো
import Steps from './components/home/Steps';
import Pricing from './components/home/Pricing';
import CTA from './components/home/CTA';
import Footer from './components/Footer/Footer';

function App() {
  // প্রোডাক্ট লিস্ট এবং কার্টে থাকা আইটেমগুলো ট্র্যাক করার জন্য স্টেট
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // public ফোল্ডার থেকে JSON ডাটা ফেচ করা
  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Data loading error: ", err));
  }, []);

  // Add to Cart ফাংশন
  const handleAddToCart = (product) => {
    const isExist = cartItems.find(item => item.id === product.id);
    if (isExist) {
      toast.warning('Product is already in the cart!');
    } else {
      setCartItems([...cartItems, product]);
      toast.success('Successfully added to cart!');
    }
  };

  // Remove from Cart ফাংশন
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    toast.error('Product removed from cart!');
  };

  // Proceed to Checkout ফাংশন
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setCartItems([]); // কার্ট ক্লিয়ার করে দেওয়া হলো
      toast.success('Proceeding to checkout successfully!');
    } else {
      toast.error('Your cart is empty!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar সেকশন: এখানে cartItems এর length পাঠানো হচ্ছে */}
      <Navbar cartCount={cartItems.length} />

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="w-full "> 
        {/* Banner এবং Stats সেকশন */}
        <Banner />
        <Stats />
        

        {/* মেইন সেকশন যেখানে Product এবং Cart টগল হবে */}
        <MainContainer 
          products={products} 
          cartItems={cartItems} 
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCheckout={handleCheckout}
        />

        <Steps></Steps>
        <Pricing></Pricing>
        <CTA></CTA>
        
      </main>
      <Footer></Footer>
      

      {/* Toastify Container - এটি একবারই অ্যাপের রুটে রাখতে হয় */}
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light" 
      />
    </div>
  );
}

export default App;