import React from "react";
import AppCard from "./AppCard";

export default function TopApps({ apps = [] }) {
  const top = apps.slice(0, 8);
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="items-center mb-4">
        <h2 className="text-3xl font-bold container text-center">Trending Apps</h2>
        <p className="text-center text-gray-500 pt-7">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {top.map(a => <AppCard key={a.id} app={a} />)}
      </div>
        <div className="container text-center">
            <button className="w-25 h-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] items-center text-center mt-5 mx-auto container rounded-sm"> <a href="/apps" className="text-sm text-white">Show All</a> </button>
        </div>
    </section>
  );
}
