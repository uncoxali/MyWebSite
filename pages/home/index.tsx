import React, { FC } from 'react';

import HomePage from '@components/Home';
import Navbar from '@components/Navbar';

const Home: FC = () => {
    return (
        <>
            <div className=" h-auto w-full">
                <Navbar />
                <HomePage />
            </div>
            <div></div>
        </>
    );
};

export default Home;
