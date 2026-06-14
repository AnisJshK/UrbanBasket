import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useUser } from "@clerk/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

const MainLayout = ()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
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
            <Route path="/product/*" element={<ProductDetails/>} />
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