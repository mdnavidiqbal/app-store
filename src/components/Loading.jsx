import React, { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

export default function Loading(){
  const { loading } = useContext(LoadingContext);
  if(!loading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="p-4 bg-white rounded-lg flex items-center gap-4">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
        <div>Loading...</div>
      </div>
    </div>
  )
}
