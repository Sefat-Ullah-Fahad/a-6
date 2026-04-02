import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Header/Navbar";
import Banner from "./components/Hero/Banner";
import Stats from "./components/home/Stats";
import MainContainer from "./components/MainContainer/MainContainer";
import Steps from "./components/home/Steps";
import Pricing from "./components/home/Pricing";
import CTA from "./components/home/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Data loading error: ", err));
  }, []);

  const handleAddToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (isExist) {
      toast.warning("Product is already in the cart!");
    } else {
      setCartItems([...cartItems, product]);
      toast.success("Successfully added to cart!");
    }
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    toast.error("Product removed from cart!");
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setCartItems([]);
      toast.success("Proceeding to checkout successfully!");
    } else {
      toast.error("Your cart is empty!");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartItems.length} />

      <main className="w-full ">
        <Banner />
        <Stats />

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
