import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Secondpage from "./components/Secondpage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="scrollContainer">
              <HeroSection />
              
            
              <FourthPage />
              <FifthPage />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}
