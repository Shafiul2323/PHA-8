import React, { Suspense, useState, useEffect } from 'react';
import VScodeLogo from '../../assets/VSCode.png';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';

const Apps = () => {
  const AppsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(AppsData);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const matched = AppsData.filter(app =>
      app.title.toLowerCase().includes(term)
    );
    setFilteredApps(matched);
  }, [searchTerm, AppsData]);

  return (
    <div className='bg-[#E9E9E9]'>
      <div>
        <div className='flex flex-col items-center text-center py-10'>
          <div className='flex gap-4'>
            <h2 className='text-4xl font-bold'>Our All Applications</h2>
            <img src={VScodeLogo} className='w-10 h-10' alt="VS Code Logo" />
          </div>
          <p className='text-gray-500 pt-2'>
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className='flex items-center justify-between px-17'>
          <p className='text-xl font-semibold underline text-[#743DE7]'>
            <span>{filteredApps.length}</span> Apps Found
          </p>
          <label className="input flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 rounded-md">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              type="search"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none w-full"
            />
          </label>
        </div>

        <div className='divider border-t-2 border-gray-200'></div>
      </div>

      <Suspense>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-17 py-5 mx-auto'>
          {filteredApps.length === 0 ? (
            <p className='text-center text-gray-500 text-xl col-span-full'>
              No apps match your search.
            </p>
          ) : (
            filteredApps.map(AppData => (
              <AppCard key={AppData.id} AppData={AppData} />
            ))
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;