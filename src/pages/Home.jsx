import React from "react";
import Banner from "../components/Banner";
import TopApps from "../components/TopApps";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/apps.json";

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Banner />
        <TopApps apps={data} />
      </main>
      <Footer />
    </div>
  );
}
