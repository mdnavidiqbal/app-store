
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/apps.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import InstallButton from "../components/InstallButton";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Download, ScanEye } from "lucide-react";

export default function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    const found = data.find((d) => String(d.id) === String(id));
    setApp(found || null);
  }, [id]);

  if (app === null) {
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto p-8 text-center text-gray-600">
          App not found
        </main>
        <Footer />
      </>
    );
  }

  const chartData = app.ratings.map((r) => ({
    name: r.name.replace(" star", ""),
    count: r.count,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Loading />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={app.image}
            alt={app.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />


          <div className="flex flex-col items-center md:items-start w-full">
    
            <div className="text-gray-600 text-sm mb-3 text-center md:text-left">
              {app.companyName} • {app.size} MB
            </div>

        
            <div className="flex gap-8 text-center md:text-left">
              <div>
                <Download className="text-green-600 mx-auto md:mx-0 mb-1" />
                <span className="text-sm">{app.downloads.toLocaleString()}</span>
                <div className="font-semibold text-xs">Downloads</div>
              </div>
              <div>
                <span className="mb-1 block text-yellow-500">⭐</span>
                <span className="text-sm">{app.ratingAvg}</span>
                <div className="font-semibold text-xs">Rating</div>
              </div>
              <div>
                <ScanEye className="mx-auto md:mx-0 mb-1 text-blue-600" />
                <span className="text-sm">{app.reviews}</span>
                <div className="font-semibold text-xs">Reviews</div>
              </div>
            </div>

     
            <div className="mt-5">
              <InstallButton appId={app.id} />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

      
        <section className="mt-4">
          <h3 className="font-semibold mb-2 text-center">Reviews Breakdown</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#632ee3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>


        <section className="mt-8">
          <h3 className="font-semibold mt-6 mb-2">Description</h3>
          <p className="text-gray-700">{app.description}</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
