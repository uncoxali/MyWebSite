import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Footer_User from '@assets/svg/shopify/footer-user.svg';
import GooglePlay from '@assets/svg/shopify/googleplay.svg';
import AppleStore from '@assets/svg/shopify/applestore.svg';
import Instagram from '@assets/svg/icons/instagram.svg';
import Youtube from '@assets/svg/icons/youtube.svg';
import Twitter from '@assets/svg/icons/twitter.svg';
import WhatsApp from '@assets/svg/icons/whatsapp.svg';
import Linkedin from '@assets/svg/icons/linkedin.svg';

export default function index() {
    const { t, lang } = useTranslation();

    const isRTL = lang === 'fa' || lang === 'he';

    const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

    return (
        <div className="container mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="lg:mt-36 md:mt-72 xl:px-52 2xl:px-64 mt-16 p-2">
                <div className=" lg:flex rounded-3xl lg:h-80 md:h-auto h-auto bg-blue-40 lg:px-20 md:p-5">
                    <div className="h-80 lg:w-1/2 blue-500 lg:px-0 px-10 lg:-mr-24">
                        <div
                            className={` lg:w-full md:flex lg:flex-none flex justify-center ${
                                isRTL ? 'mr-5' : 'ml-14'
                            }`}
                        >
                            <Footer_User className="-mt-16 lg:w-80 w-60 absolute" />
                        </div>
                    </div>
                    <div
                        className={`lg:flex md:flex flex justify-center lg:mr-10 w-full lg:justify-start px-5`}
                    >
                        <div className={`${isRTL ? '' : 'lg:ml-52 md:ml-48 ml-3'} flex`}>
                            <div className="lg:w-1/2 lg:h-80">
                                <div className="px-3">
                                    <p className="text-lg text-white mt-3 font-bold">
                                        {isRTL ? 'همین حالا دانلود کنید' : 'Download now'}
                                    </p>
                                    <div className="lg:w-80">
                                        <p className="text-white text-xs mt-3">
                                            {isRTL
                                                ? ' !!اپلیکیشن شاپیفای را میتونید از بستر های زیر دانلود کنید'
                                                : 'You can download the Shapifa application from the following platforms do'}
                                        </p>
                                    </div>
                                </div>
                                <div className={`flex justify-between mt-6 `}>
                                    <div className="">
                                        <p
                                            className={`${
                                                isRTL ? 'mr-3' : 'ml-0'
                                            } text-white text-xs`}
                                        >
                                            {isRTL ? 'نسخه ی اندروید' : 'Android Version'}
                                        </p>
                                        <div className="border border-white lg:p-2 md:p-2 p-1 flex items-center mt-3 lg:w-48 w-44 mr-3">
                                            <GooglePlay className="" />
                                            <p
                                                className={`${
                                                    isRTL ? 'mr-2' : 'ml-1 mt-1'
                                                } text-xs text-white `}
                                            >
                                                {isRTL ? 'دریافت از' : 'Download'} google play
                                            </p>
                                        </div>
                                        <div className="border border-white lg:p-2 md:p-2 p-1 flex items-center mt-3 lg:w-48 w-44 mr-3">
                                            <GooglePlay className="" />
                                            <p
                                                className={`${
                                                    isRTL ? 'mr-2' : 'ml-2 mt-1'
                                                } text-xs text-white `}
                                            >
                                                {isRTL ? 'دریافت از' : 'Download'} google play
                                            </p>
                                        </div>
                                        <div className="border border-white lg:p-2 md:p-2 p-1 flex items-center mt-3 lg:w-48 w-44 mr-3">
                                            <GooglePlay className="" />
                                            <p
                                                className={`${
                                                    isRTL ? 'mr-2' : 'ml-2 mt-1'
                                                } text-xs text-white `}
                                            >
                                                {isRTL ? 'دریافت از' : 'Download'} google play
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:mr-10 mr-2">
                                        <p
                                            className={`${
                                                isRTL ? 'mr-2' : 'ml-0'
                                            } text-white text-xs`}
                                        >
                                            {' '}
                                            {isRTL ? 'نسخه ی IOS' : 'IOS Version'}
                                        </p>
                                        <div className="border border-white lg:p-2 md:p-2 p-1 flex items-center mt-3 lg:w-48 w-44 mr-1">
                                            <AppleStore className="" />
                                            <p
                                                className={`${
                                                    isRTL ? 'mr-2' : 'ml-2 mt-1ml-2 mt-1'
                                                } text-xs text-white `}
                                            >
                                                {isRTL ? 'دریافت از' : 'Download'} google play
                                            </p>
                                        </div>
                                        <div className="border border-white lg:p-2 md:p-2 p-1 flex items-center mt-3 lg:w-48 w-44 mr-1">
                                            <AppleStore className="" />
                                            <p
                                                className={`${
                                                    isRTL ? 'mr-2' : 'ml-2 mt-1ml-2 mt-1'
                                                } text-xs text-white `}
                                            >
                                                {isRTL ? 'دریافت از' : 'Download'} google play
                                            </p>
                                        </div>
                                        <div className="border border-white lg:p-2 md:p-2 p-1 flex items-center mt-3 lg:w-48 w-44 mr-1">
                                            <AppleStore className="" />
                                            <p
                                                className={`${
                                                    isRTL ? 'mr-2' : 'ml-2 mt-1'
                                                } text-xs text-white `}
                                            >
                                                {isRTL ? 'دریافت از' : 'Download'} google play
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-10 w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-10 lg:hidden md:hidden block">
                <hr className="border-2 border-gray-300" />
                <div className="mt-5">
                    <p className="text-sm">{isRTL ? 'لینک های مهم' : 'Important links'}</p>
                </div>
                <div className="flex justify-between mt-5" style={{ color: '#707A90' }}>
                    <p className="text-xs">{isRTL ? 'دانلود شاپیفای' : 'download Shopify'}</p>
                    <p className="text-xs">{isRTL ? 'صفحه ی اصلی' : 'home page'} </p>
                    <p className="text-xs">{isRTL ? 'قوانین و مقررات' : 'Terms and Conditions'}</p>
                </div>
                <div className="flex justify-start">
                    <div className="flex text-xs mt-6 ">
                        <p className="">{isRTL ? 'پشتیبانی' : 'Support'}</p>
                        <p className="mr-10">{isRTL ? 'شبکه های اجتماعی' : 'Social Networks'}</p>
                    </div>
                </div>
                <div className="mt-5 flex justify-between">
                    <div className="flex justify-center">
                        <p className="text-xs mt-2" style={{ color: '#707A90' }}>
                            {isRTL ? 'گفتگو با پشتیبانی انلاین' : 'Chat with online support'}
                        </p>
                    </div>
                    <div className="flex  justify-center">
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
                    <p className="text-xs text-center">
                        {isRTL
                            ? '    © تمامی حقوق مادی و معنوی این سایت متعلق شاپیفای می باشد.'
                            : '© All material and intellectual rights of this site belong to Shapifa.'}
                    </p>
                </div>
            </div>

            <div className="mt-20 px-48 lg:block md:block hidden">
                <div className="flex justify-around text-xs">
                    <p className="">{isRTL ? 'پشتیبانی' : 'Support'}</p>
                    <p>{isRTL ? 'شبکه های اجتماعی' : 'Social Networks'}</p>
                    <p>{isRTL ? 'لینک های مهم' : 'Important links'}</p>
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
                    <p style={{ color: '#707A90' }}>
                        {' '}
                        {isRTL ? 'گفتگو با پشتیبانی انلاین' : 'Chat with online support'}
                    </p>
                    <div className="flex justify-around text-xs" style={{ color: '#707A90' }}>
                        <p className="mr-5">{isRTL ? 'دانلود شاپیفای' : 'download Shopify'}</p>
                        <p className="mr-5">{isRTL ? 'صفحه ی اصلی' : 'home page'}</p>
                        <p className="mr-5">{isRTL ? 'قوانین و مقررات' : 'Terms and Conditions'}</p>
                    </div>
                </div>
                <hr className="border-2 border-gray-200 bg-gray-200 mt-10" />
                <div className="mt-7 flex justify-center ">
                    <p className="text-sm">
                        {isRTL
                            ? '    © تمامی حقوق مادی و معنوی این سایت متعلق شاپیفای می باشد.'
                            : '© All material and intellectual rights of this site belong to Shopify'}
                    </p>
                </div>
            </div>
            <div className="h-10"></div>
        </div>
    );
}
