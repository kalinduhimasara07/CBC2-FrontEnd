import { useState } from "react";
import ProductCard from "./components/productCard";
import "./App.css";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/errorPage";
import SignupPage from "./pages/signupPage";
import AdminHomePage from "./pages/adminHomePage";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ProductCard name= "Iphone" price= "1000"/>
      <ProductCard name= "MacBook" price= "3000"/>
      <ProductCard name= "Ipad" price= "2000"/> */}
      {/* <Test /> */}
      {/* <HomePage />
      <LoginPage /> */}
      <BrowserRouter>
        <Toaster />
        <Routes path="/*">
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
