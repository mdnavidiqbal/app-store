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
    // <header className="bg-white shadow-sm">
    //   <div className="max-w-6xl  px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    //     <div className="flex items-center  gap-4">
    //       <Link
    //         to="/"
    //         onClick={() => {
    //           setLoading(true);
    //           setTimeout(() => setLoading(false), 300);
    //         }}
    //       >
    //         <div className="flex items-center gap-2">
    //           {/* <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">HI</div> */}
    //           <div>
    //             <img className="w-10" src={logo} alt="" />
    //           </div>
    //           <div className="hidden sm:block">
    //             <div className="font-semibold">Hero.IO</div>
    //           </div>
    //         </div>
    //       </Link>
    //       <nav className="hidden md:flex items-center space-x-1 ">
    //         <NavLink to="/" className={navClass}>
    //           Home
    //         </NavLink>
    //         <NavLink to="/apps" className={navClass}>
    //           Apps
    //         </NavLink>
    //         <NavLink to="/installation" className={navClass}>
    //           Installation
    //         </NavLink>
    //       </nav>
    //     </div>

    //     <div className="flex items-center  gap-3">
    //       <Link
    //         to="/my-installation"
    //         className="text-sm px-3 py-2 rounded-md hover:bg-gray-100"
    //         onClick={() => {
    //           setLoading(true);
    //           setTimeout(() => setLoading(false), 300);
    //         }}
    //       >
    //         My Installation
    //         {installedCount > 0 && (
    //           <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    //             {installedCount}
    //           </span>
    //         )}
    //       </Link>

    //       <a
    //         href="https://github.com/YOUR_GITHUB_USERNAME"
    //         target="_blank"
    //         rel="noreferrer"
    //         onClick={() => setLoading(true)}
    //         className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-md text-sm"
    //       >
    //         <Github></Github> Contribute
    //       </a>
    //     </div>
    //   </div>
    // </header>
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

    {/* Center Section - Navigation Links (Hidden on Mobile) */}
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

    {/* Right Section - My Installation and Contribute */}
    <div className="flex items-center gap-3">
      {/* <Link
        to="/my-installation"
        className="text-sm px-3 py-2 rounded-md hover:bg-gray-100"
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 300);
        }}
      >
        My Installation
        {installedCount > 0 && (
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {installedCount}
          </span>
        )}
      </Link> */}

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
