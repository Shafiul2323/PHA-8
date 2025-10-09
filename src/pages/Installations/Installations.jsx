import React, { useEffect, useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import {
  getInstalledApp,
  removeInstalledApp
} from '../../components/LocalStorage/LocalStorage';

const Installations = () => {
  const AppsData = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  // ✅ Load installed apps when component mounts
  useEffect(() => {
    loadInstalledApps();
  }, []);

  const loadInstalledApps = () => {
    const storedIds = getInstalledApp(); // [1, 2, 3]
    const matchedApps = AppsData.filter(app => storedIds.includes(app.id));
    setInstalledApps(matchedApps);
  };

  // ✅ Handle uninstall
  const handleUninstall = (id) => {
    removeInstalledApp(id); // Remove from localStorage
    const updatedApps = installedApps.filter(app => app.id !== id); // Remove from UI
    setInstalledApps(updatedApps);
  };

  // ✅ Handle sort
  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...installedApps].sort((a, b) =>
      order === 'low' ? a.downloads - b.downloads : b.downloads - a.downloads
    );
    setInstalledApps(sorted);
  };

  return (
    <div className='bg-[#E9E9E9] min-h-screen px-17 mx-auto py-10'>
      <div className='text-center mb-6'>
        <div className='flex justify-center items-center gap-4'>
          <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
          <i className="fa-brands fa-dropbox text-4xl text-[#743DE7]"></i>
        </div>
        <p className='text-gray-500 pt-2'>Explore all trending apps you installed</p>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <p className='text-xl font-semibold underline text-[#743DE7]'>
          <span>{installedApps.length}</span> Apps Found
        </p>

        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="select max-w-xs bg-white border border-gray-300"
        >
          <option disabled value="">Sort by Downloads</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className='divider border-t-2 border-gray-200'></div>

      <div className='space-y-5'>
        {installedApps.length === 0 ? (
          <p className='text-center text-gray-500 text-xl'>No installed apps found.</p>
        ) : (
          installedApps.map(app => (
            <div key={app.id} className='flex items-center justify-between bg-white py-3 px-4 rounded-2xl shadow-md'>
              <div className='flex items-center gap-4'>
                <img src={app.image} alt={app.title} className='w-16 h-16 rounded-xl' />
                <div>
                  <h2 className='font-medium text-lg'>{app.title}</h2>
                  <div className='flex gap-4 mt-1 text-sm text-gray-600'>
                    <div className='flex items-center gap-1'>
                      <MdOutlineFileDownload className='text-lg text-[#743DE7]' />
                      <span>{app.downloads} M</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-500' />
                      <span>{app.ratingAvg}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className='btn shadow hover:shadow-lg bg-[#00D390] text-white'
                onClick={() => handleUninstall(app.id)}
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installations;