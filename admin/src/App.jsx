import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import AdminAuth from "./context/AdminAuth";
import { SignedOut, SignIn, SignOutButton, useUser } from "@clerk/clerk-react";

function App() {
  const isAdmin = AdminAuth();
  const { isSignedIn } = useUser();

  const signOut = () => {
    return SignOutButton();
  };

  if (isAdmin === null) return <p>Loading...</p>;
  if (!isSignedIn) return <SignIn routing="hash" />;
  if (isAdmin === false)
    return (
      <>
        <p className="flex justify-between p-2 m-10">
          Access Denied - Admins only. <br />
          
        </p>
        <div className="flex max-w-max p-2 m-10 cursor-pointer
         border border-zinc-300 text-zinc-800 hover:bg-zinc-900 hover:text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-2xl transition-colors duration-700 ">
        {signOut()}
      
     </div>
      </>
    );

  return (
    <div className="bg-gray-50  h-screen  ">
      <>
        <Navbar />
        <hr className="border-t h-1px bg-gray-200" />
      </>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
