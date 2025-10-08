import React, { useEffect, useState } from "react";
import data from "../data/apps.json";
import AppCard from "../components/AppCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import photo from '../assets/App-Error.png'
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";

export default function AllApps(){
  const [apps, setApps] = useState(data);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(data);
  const [sortBy, setSortBy] = useState(""); 
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    setApps(data);
    setFiltered(data);
  }, []);

  useEffect(() => {
    setSearchLoading(true);
    const t = setTimeout(() => {
      const q = query.trim().toLowerCase();
      let res = apps.filter(a => a.title.toLowerCase().includes(q));
      if (sortBy === "high-low") {
        res = res.sort((a,b)=> b.downloads - a.downloads);
      } else if (sortBy === "low-high") {
        res = res.sort((a,b)=> a.downloads - b.downloads);
      }
      setFiltered(res);
      setSearchLoading(false);
    }, 250);
    return () => clearTimeout(t);
  }, [query, apps, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Loading />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold">All Apps</h1>
            <p className="text-sm text-gray-500">{apps.length} apps available</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
              placeholder="Search apps..."
              className="px-3 py-2 rounded border"
            />
            <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)} className="px-2 py-2 border rounded">
              <option value="">Sort by downloads</option>
              <option value="high-low">High → Low</option>
              <option value="low-high">Low → High</option>
            </select>
          </div>
        </div>

        {searchLoading ? (
          <div className="py-8 flex justify-center"><div className="animate-spin w-8 h-8 border-4 border-gray-200 border-t-gray-800 rounded-full"></div></div>
        ) : (
          <>
            {filtered.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-12">
               <img src={photo} alt="" />
       <h1 className="text-4xl font-bold pt-7">OPPS!!APP NOT FOUND</h1>
       <p className="mt-2 text-gray-600"> The app you are requesting is not found our system.Please try another apps</p>
       <Link to="/" className="mt-4 px-4 py-2 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded">Go home</Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(a => <AppCard key={a.id} app={a} />)}
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
