import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";
// import { getInstalled } from "../utils/storage";
import logo from "../assets/logo.png";
import { CloudDownload, Github, Home, UtensilsCrossed } from "lucide-react";
export default function Header() {
  const { setLoading } = useContext(LoadingContext);
  // const installedCount = getInstalled().length;

  const navClass = ({ isActive }) =>
    "px-3 py-2 rounded-md text-sm font-medium " +
    (isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100");

  return (

  <header className="bg-white shadow-sm">
  <div className="max-w-6xl mx-auto px-4  sm:px-6lg:px-8 flex items-center justify-between h-16">
    {/* Left Section - Logo */}
    <div className="flex items-center gap-4">
      <Link
        to="/"
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 300);
        }}
      >
        <div className="flex items-center gap-2">
          <div>
            <img className="w-10" src={logo} alt="" />
          </div>
          <div className="hidden sm:block">
            <div className="font-semibold">NAVIDIA TEC</div>
          </div>
        </div>
      </Link>
    </div>

    <div className="hidden md:flex items-center space-x-1">
      <nav className="flex items-center space-x-4">
        <NavLink to="/" className={navClass}>
          <span className="flex gap-1 items-center justify-center"><Home></Home>Home</span>
        </NavLink>
        <NavLink to="/apps" className={navClass}>
          <span className="flex gap-1 items-center justify-center"><UtensilsCrossed></UtensilsCrossed>Apps</span>
        </NavLink>
        <NavLink to="/installation" className={navClass}>
         <span className="flex gap-1 items-center justify-center"><CloudDownload></CloudDownload> Installation</span>
        </NavLink>
      </nav>
    </div>

    <div className="flex items-center gap-3">
      

      <a
        href="https://github.com/mdnavidiqbal"
        target="_blank"
        rel="noreferrer"
        onClick={() => setLoading(true)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
      >
        <Github></Github> Contribute
      </a>
    </div>
  </div>
</header>
  );
}
