import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";

export default function App() {
  return (
    <>
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AllApps />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/installation" element={<MyInstallation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
