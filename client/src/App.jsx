import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useUser } from "@clerk/react";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard/>}/>
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;