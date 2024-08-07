import { Routes, Route } from "react-router-dom";


import Home from "./components/home/Home"
import Navigation from "./components/navigation/Navigation";
import ScrollToPlace from "./components/ScrollToPlace";
import LoginNew from "./components/login/LoginNew";
import RegisterNew from "./components/register/RegisterNew";
import CreateFlowerNew from "./components/create-flower/CreateFlowerNew";
import DetailsFlower from "./components/details-flower/DetailsFlower";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state)
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }

  return (
    <>
      <ScrollToPlace />

      <AuthContext.Provider value={contextData}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<RegisterNew />} />

          <Route path="/login" element={<LoginNew />} />

          <Route path="/create" element={<CreateFlowerNew />} />

          <Route path="/flowers/:flowerId/description" element={<DetailsFlower />} />
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App
