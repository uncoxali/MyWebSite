import React from 'react';

import Footer_User from '@assets/svg/shopify/footer-user.svg';
import GooglePlay from '@assets/svg/shopify/googleplay.svg';
import AppleStore from '@assets/svg/shopify/applestore.svg';
import Instagram from '@assets/svg/icons/instagram.svg';
import Youtube from '@assets/svg/icons/youtube.svg';
import Twitter from '@assets/svg/icons/twitter.svg';
import WhatsApp from '@assets/svg/icons/whatsapp.svg';
import Linkedin from '@assets/svg/icons/linkedin.svg';

export default function index() {
    return (
        <div className="container mx-auto px-4">
            <div className="lg:mt-36 md:mt-72 xl:px-52 2xl:px-64 mt-16 p-2">
                <div className=" lg:flex rounded-3xl lg:h-80 md:h-auto h-auto bg-blue-40 lg:px-20 md:p-5 ">
                    <div className="h-80 lg:w-1/2 blue-500 lg:px-0 px-16 lg:-mr-24">
                        <div className=" lg:w-full ">
                            <Footer_User className="-mt-16 lg:w-80 w-60 absolute" />
                        </div>
                    </div>
                    <div className="lg:flex md:flex flex justify-center lg:mr-10 w-full lg:justify-start px-10">
                        <div className="lg:w-1/2 lg:h-80 ">
                            <div className="px-3">
                                <p className="text-lg text-white mt-3"> همین حالا دانلود کنید</p>
                                <div className="lg:w-80">
                                    <p className="text-white text-xs mt-3">
                                        !!اپلیکیشن شاپیفای را میتونید از بستر های زیر دانلود کنید
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <div>
                                    <p className="text-white text-xs">نسخه ی اندروید</p>
                                    <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-44">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-44">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-44">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                </div>
                                <div className="lg:mr-10 mr-3">
                                    <p className="text-white text-xs">نسخه ی IOS</p>
                                    <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-44">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-44">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-44">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-10 w-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-10 lg:hidden md:hidden block">
                <hr className="border-2 border-gray-300" />
                <div className="mt-5">
                    <p className="text-sm">لینک های مهم</p>
                </div>
                <div className="flex justify-between mt-5" style={{ color: '#707A90' }}>
                    <p className="text-xs">دانلود شاپیفای</p>
                    <p className="text-xs">صفحه ی اصلی </p>
                    <p className="text-xs">قوانین و مقررات</p>
                </div>
                <div className="flex justify-around text-xs mt-5">
                    <p>پشتیبانی</p>
                    <p>شبکه های اجتماعی</p>
                </div>
                <div className="mt-5 flex justify-between">
                    <div className="flex justify-center">
                        <p className="text-xs mt-7" style={{ color: '#707A90' }}>
                            گفتگو با پشتیبانی انلاین
                        </p>
                    </div>
                    <div className="flex mt-3 justify-center">
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Youtube />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Instagram />
                        </div>

                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Linkedin />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Twitter />
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex justify-center">
                    <p className="text-xs">
                        © تمامی حقوق مادی و معنوی این سایت متعلق شاپیفای می باشد.
                    </p>
                </div>
            </div>

            <div className="mt-20 px-48 lg:block md:block hidden">
                <div className="flex justify-around text-xs">
                    <p>پشتیبانی</p>
                    <p>شبکه های اجتماعی</p>
                    <p>لینک های مهم</p>
                </div>
                <div className="flex justify-around mt-10 text-xs">
                    <div className="flex">
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Youtube />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Instagram />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3 flex justify-center items-center">
                            <WhatsApp />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Linkedin />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-400 p-2 mr-3">
                            <Twitter />
                        </div>
                    </div>
                    <p style={{ color: '#707A90' }}>گفتگو با پشتیبانی انلاین</p>
                    <div className="flex justify-around text-xs" style={{ color: '#707A90' }}>
                        <p className="mr-5">دانلود شاپیفای</p>
                        <p className="mr-5">صفحه ی اصلی </p>
                        <p className="mr-5">قوانین و مقررات</p>
                    </div>
                </div>
                <hr className="border-2 border-gray-200 bg-gray-200 mt-10" />
                <div className="mt-7 flex justify-center ">
                    <p className="text-sm">
                        © تمامی حقوق مادی و معنوی این سایت متعلق شاپیفای می باشد.
                    </p>
                </div>
            </div>
            <div className="h-10"></div>
        </div>
    );
}
