import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Componets/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Ourstor from "./Pages/Ourstor";
import Blogs from "./Pages/Blogs";
import Compare from "./Pages/Compare";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Signup from "./Pages/Signup";
import Resatpassword from "./Pages/Resatpassword";
import Singleblogs from "./Pages/Singleblogs";
import Privacypolicy from "./Pages/Privacypolicy";
import Refundpolicy from "./Pages/Refundpolicy";
import Shippingpolicy from "./Pages/Shippingpolicy";
import Turmandconditon from "./Pages/Turmandconditon";
import Singleproduct from "./Pages/Singleproduct";
import Aboutus from "./Pages/Aboutus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="product" element={<Ourstor />} />
            <Route path="product/:id" element={<Singleproduct />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="Compare" element={<Compare />} />
            <Route path="Wishlist" element={<Wishlist />} />
            <Route path="Login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="singleblogs" element={<Singleblogs />} />
            <Route path="Resatpassword" element={<Resatpassword />} />
            <Route path="Privacypolicy" element={<Privacypolicy />} />
            <Route path="Refundpolicy" element={<Refundpolicy />} />
            <Route path="Shippingpolicy" element={<Shippingpolicy />} />
            <Route path="Turmandconditon" element={<Turmandconditon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
