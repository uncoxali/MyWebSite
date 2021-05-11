import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import Plus from '@assets/svg/icons/plus.svg';
import Minez from '@assets/svg/icons/minez.svg';

export default function index() {
    const [drop, setDrop] = React.useState<boolean>(false);

    return (
        <div className="bg-green-10">
            <Navbar />
            <div className="h-screen mt-20 w-full lg:px-32 md:px-28 px-10">
                <div className="">
                    <div className="mt-32 ">
                        <p className="text-2xl font-bold" style={{ color: '#4C5364' }}>
                            پرسش های متداول
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-between mt-14">
                            <p className={`${drop && true ? 'text-blue-500' : ''} mt-3`}>
                                چگونه میتوانم حساب باز کنم
                            </p>
                            <p className="cursor-pointer text-4xl" onClick={() => setDrop(!drop)}>
                                {drop && true ? '_' : <Plus className="w-7 opacity-50" />}
                            </p>
                        </div>
                        <div className={`${drop && true ? 'block' : 'hidden'} mt-3`}>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bottom-0 w-full h-auto">
                <Footer />
            </div>
        </div>
    );
}
