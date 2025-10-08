import React from "react";
import photo from '../assets/error-404.png'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
       <img src={photo} alt="" />
       <h1 className="text-4xl font-bold">Opps,page not found!</h1>
       <p className="mt-2 text-gray-600"> The page you are looking for is not available.</p>

        <Link to="/" className="mt-4 px-4 py-2 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded">Go home</Link>
      </main>
      <Footer />
    </div>
  );
}
