import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useUser } from "@clerk/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Footer1 from "./components/Footer1";
import OurPolicies from "./components/OurPolicies";
import MyCart from "./pages/My-Cart";
 import { ToastContainer, toast } from 'react-toastify';

const MainLayout = ()=>{
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <Outlet/>
    <Footer1/>
    <OurPolicies/>
    </>
  )
}

const App = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route element={<MainLayout/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>} />
            <Route path="/my-orders" element={<Orders/>} />
            <Route path="/contact-us*" element={<Contact/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/my-cart" element={<MyCart/>} />
          </Route>
            
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;