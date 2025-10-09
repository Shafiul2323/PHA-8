import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import StateCard from '../../components/StateCard/StateCard';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const AppsData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <StateCard></StateCard>
            <TrendingApps AppsData={AppsData}></TrendingApps>
        </div>
    );
};

export default Home;