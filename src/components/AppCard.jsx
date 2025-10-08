import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";
import { Download } from "lucide-react";

export default function AppCard({ app }) {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoadingContext);

  return (
    <div
      className="bg-white  rounded-lg p-4 shadow-2xl hover:shadow-md cursor-pointer"
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate(`/apps/${app.id}`);
        }, 300);
      }}
    >
      <div className="items-center gap-3">
        <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-md" />
        <div>
          <div className="font-semibold flex items-center gap-1.5">{app.title} : <div className="text-xs text-gray-500">{app.companyName}</div></div>
          {/* <div className="text-xs text-gray-500">{app.companyName}</div> */}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
        <div className="flex gap-1.5"><Download className="text-green-500"></Download><span className="font-medium text-green-500">{app.downloads.toLocaleString()}</span></div>
        <div>⭐ <span className="text-orange-400">{app.ratingAvg}</span></div>
      </div>
    </div>
  );
}
