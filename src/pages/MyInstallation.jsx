
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getInstalled, uninstallApp } from "../utils/storage";
import data from "../data/apps.json";
import { toast } from "react-toastify";
import { Download } from "lucide-react";

export default function MyInstallation() {
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    const ids = getInstalled();
    const apps = data.filter((a) => ids.includes(a.id));
    setInstalled(apps);
  }, []);

  const handleUninstall = (id) => {
    uninstallApp(id);
    setInstalled((prev) => prev.filter((a) => a.id !== id));
    toast.success("Uninstalled");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full p-6 space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-center">Your Installed APP</h1>
          <p className="font-semibold text-xl text-center text-gray-400">
            Explore All The Trending Apps On The Market Developed By Us
          </p>
        </div>

        {installed.length === 0 ? (
          <div className="text-gray-600 text-center">You have no installed apps.</div>
        ) : (
          <div className="flex flex-col space-y-6">
            {installed.map((app) => (
              <div
                key={app.id}
                className="w-full bg-white p-6 rounded shadow flex flex-col sm:flex-row items-center sm:items-start justify-between"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-24 h-24 rounded object-cover flex-shrink-0"
                />

                <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
                  <div className="font-semibold text-xl">{app.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{app.companyName}</div>
                  <div className="mt-3 flex justify-center sm:justify-start gap-8 text-sm text-gray-700">
                    <div className="flex gap-1.5 items-center">
                      <Download className="text-green-600" />
                      <span className="text-green-600 font-semibold">{app.downloads.toLocaleString()}</span>
                    </div>
                    <div>⭐<span className="text-yellow-600">{app.ratingAvg}</span></div>
                  </div>
                </div>


                <button
                  onClick={() => handleUninstall(app.id)}
                  className="mt-4 sm:mt-0 px-5 py-2 bg-green-600 text-white rounded text-sm font-medium"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
