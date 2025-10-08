import React, { useState, useEffect } from "react";
import { installApp, isInstalled, uninstallApp } from "../utils/storage";
import { toast } from "react-toastify";

export default function InstallButton({ appId }) {
  const [installed, setInstalled] = useState(isInstalled(appId));

  useEffect(() => {
    setInstalled(isInstalled(appId));
  }, [appId]);

  const handleInstall = () => {
    const ok = installApp(appId);
    if (ok) {
      setInstalled(true);
      toast.success("App installed successfully");
    } else {
      toast.info("Already installed");
    }
  };

  const handleUninstall = () => {
    uninstallApp(appId);
    setInstalled(false);
    toast.success("App uninstalled");
  };

  return installed ? (
    <button onClick={handleUninstall} className="px-4 py-2 bg-red-600 text-white rounded-md">Uninstall</button>
  ) : (
    <button onClick={handleInstall} className="px-4 py-2 bg-blue-600 text-white rounded-md">Install</button>
  );
}
