import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

export default function index() {
    return (
        <div>
            <Navbar />
            <div className="h-screen mt-20 w-full"></div>
            <div className=" bottom-0 w-full h-auto">
                <Footer />
            </div>
        </div>
    );
}
