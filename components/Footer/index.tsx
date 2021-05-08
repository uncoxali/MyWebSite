import React from 'react';

import Footer_User from '@assets/svg/shopify/footer-user.svg';
import GooglePlay from '@assets/svg/shopify/googleplay.svg';
import AppleStore from '@assets/svg/shopify/applestore.svg';
import Youbube from '@assets/svg/icons/youtube.svg';

export default function index() {
    return (
        <div>
            <div className="lg:mt-36 lg:px-48 mt-60 px-5">
                <div className=" lg:flex rounded-3xl lg:h-80 h-screen bg-blue-400 lg:px-20 p-5">
                    <div className="h-80 lg:w-1/2 blue-500 lg:px-0 px-16 flex justify-center">
                        <div className="lg:flex justify-start lg:w-full">
                            <Footer_User className="-mt-16 lg:w-80 w-60 items-center" />
                        </div>
                    </div>
                    <div className="lg:flex md:flex flex justify-center lg:mr-32 w-full lg:justify-start">
                        <div className="lg:w-1/2 lg:h-80 ">
                            <div className="px-3">
                                <p className="text-lg text-white mt-3"> همین حالا دانلود کنید</p>
                                <p className="text-white text-xs mt-3">
                                    !!اپلیکیشن شاپیفای را میتونید از بستر های زیر دانلود کنید
                                </p>
                            </div>
                            <div className="flex mt-6">
                                <div>
                                    <p className="text-white text-xs">نسخه ی اندروید</p>
                                    <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-36">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-36">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-36">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                </div>
                                <div className="lg:mr-10 mr-3">
                                    <p className="text-white text-xs">نسخه ی IOS</p>
                                    <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-36">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-36">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-36">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-10 lg:hidden md:hidden block">
                <hr className="border-2 border-gray-300" />
                <div className="mt-5">
                    <p className="text-sm">لینک های مهم</p>
                </div>
                <div className="flex justify-between mt-5">
                    <p className="text-xs">دانلود شاپیفای</p>
                    <p className="text-xs">صفحه ی اصلی </p>
                    <p className="text-xs">قوانین و مقررات</p>
                </div>
                <div className="flex justify-around text-xs mt-5">
                    <p>شبکه های اجتماعی</p>
                    <p>پشتیبانی</p>
                    <p>لینک های مهم</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-xs mt-3">گفتگو با پشتیبانی انلاین</p>
                    <div>{/* <Youbube /> */}</div>
                </div>
                <div className="mt-5 flex justify-center">
                    <p className="text-xs">
                        © تمامی حقوق مادی و معنوی این سایت متعلق شاپیفای می باشد.
                    </p>
                </div>
            </div>

            <div className="mt-20 px-48 lg:block md:block hidden">
                <div className="flex justify-around text-xs">
                    <p>شبکه های اجتماعی</p>
                    <p>پشتیبانی</p>
                    <p>لینک های مهم</p>
                </div>
                <div className="flex justify-around mt-10 text-xs">
                    <div>icons</div>
                    <p>گفتگو با پشتیبانی انلاین</p>
                    <div className="flex justify-around text-xs">
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
