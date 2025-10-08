const KEY = "hero_io_installed";

export function getInstalled() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveInstalled(ids) {
  localStorage.setItem(KEY, JSON.stringify(ids));
}

export function installApp(id) {
  const arr = getInstalled();
  if (!arr.includes(id)) {
    arr.push(id);
    saveInstalled(arr);
    return true;
  }
  return false;
}

export function uninstallApp(id) {
  let arr = getInstalled();
  arr = arr.filter(i => i !== id);
  saveInstalled(arr);
}

export function isInstalled(id) {
  return getInstalled().includes(id);
}
