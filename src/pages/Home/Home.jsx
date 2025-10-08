import React from 'react';
import Banner from '../../components/Banner/Banner';
import StateCard from '../../components/StateCard/StateCard';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <StateCard></StateCard>
        </div>
    );
};

export default Home;