const storageKey = "AppsList";

const getInstalledApp = () => {
  const storedApps = JSON.parse(localStorage.getItem(storageKey));
  return storedApps || [];
};

const addInstalledApp = (id) => {
  const storedApps = getInstalledApp();

  if (!storedApps.includes(id)) {
    storedApps.push(id);
    localStorage.setItem(storageKey, JSON.stringify(storedApps));
  }
};

const removeInstalledApp = (id) => {
  const storedApps = getInstalledApp();
  const updatedApps = storedApps.filter(appId => appId !== id);
  localStorage.setItem(storageKey, JSON.stringify(updatedApps));
};

export { getInstalledApp, addInstalledApp, removeInstalledApp };