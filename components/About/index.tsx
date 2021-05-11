import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Style from './style.module.css';

import data from 'data.json';

import User from '@assets/svg/icons/about-user.svg';
import Line from '@assets/svg/icons/line-about.svg';
import Line2 from '@assets/svg/icons/line-about2.svg';
// import Question from '@assets/svg/icons/question-icon.svg';

import cn from 'classnames';

export default function index() {
    return (
        <div className="bg-green-10">
            <Navbar />
            <div className="h-screen lg:mt-40 w-full lg:px-32">
                <div className="">
                    <div className="lg:mt-0 md:mt-0 mt-20">
                        <p className={cn(Style.text, 'text-xl font-bold')}>ما از کجا پیدامون شد؟</p>
                        <div className="mt-8 w-2/3">
                            <p className={cn(Style.title, 'text-sm opacity-75 leading-8')}>
                                {data.aboutPage}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:block md:block hidden">
                    <div className="lg:flex md:flex justify-between lg:px-32 lg:mt-28">
                        <div>
                            <User className="mr-2" />
                            <p className="text-sm">اصغر احمد ابادی</p>
                            <div className="flex justify-center">
                                <p className="text-xs mt-2">بنیانگذار</p>
                            </div>
                        </div>
                        {/* <Line className="lg:absolute mr-24 mt-20" /> */}
                        <div>
                            <User />
                            <p className="text-sm">اصغر احمد ابادی</p>
                            <div className="flex justify-center">
                                <p className="text-xs mt-2">بنیانگذار</p>
                            </div>
                        </div>
                        {/* <Line2 className="lg:absolute ml-10 lg:left-80 lg:mt-3" /> */}
                        <div>
                            <User />
                            <p className="text-sm">اصغر احمد ابادی</p>
                            <div className="flex justify-center">
                                <p className="text-xs mt-2">بنیانگذار</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div></div>
                        <div className=" w-24 h-24 rounded-full bg-blue-300 flex justify-center items-center">
                            <h1 className="text-7xl text-gray-400 font-bold">?</h1>
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
