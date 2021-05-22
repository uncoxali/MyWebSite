import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Style from './style.module.css';

import data from 'data.json';
import useTranslation from 'next-translate/useTranslation';

import User from '@assets/svg/icons/about-user.svg';
import Line from '@assets/svg/icons/line-about.svg';
import Add from '@assets/svg/icons/adduser.svg';
// import Question from '@assets/svg/icons/question-icon.svg';

import cn from 'classnames';

export default function index() {
    const { t, lang } = useTranslation();

    const isRTL = lang === 'fa' || lang === 'he';

    const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

    return (
        <div className="bg-green-10" dir={isRTL ? 'rtl' : 'ltr'}>
            <Navbar />
            <div className="h-screen lg:mt-32 w-full lg:px-28 md:px-28 px-10">
                <div className="lg:mt-0 md:mt-0 mt-20">
                    <p className={cn(Style.text, ' text-2xl font-bold')}>{t('about:title')}</p>
                    <div className="mt-8 lg:w-2/3 md:w-2/3 w-full ">
                        <p className={cn(Style.title, 'text-sm opacity-75 leading-8')}>
                            {t('about:p')}
                        </p>
                    </div>
                </div>
                <div className="lg:block md:block hidden">
                    <div className="lg:flex md:flex justify-between lg:px-32 lg:mt-28">
                        <div className={``}>
                            <User className={`${isRTL ? 'ml-3' : 'ml-5'}`} />
                            <p className="text-sm">{t('about:h4')}</p>
                            <div className="flex justify-center">
                                <p className={` text-xs mt-2`}>{t('about:h5')}</p>
                            </div>
                        </div>
                        <div>
                            <User className={`${isRTL ? 'ml-3' : 'ml-5'}`} />
                            <p className="text-sm">{t('about:h4')}</p>
                            <div className="flex justify-center">
                                <p className={` text-xs mt-2`}>{t('about:h5')}</p>
                            </div>
                        </div>

                        <div>
                            <User className={`${isRTL ? 'ml-3' : 'ml-5'}`} />
                            <p className="text-sm">{t('about:h4')}</p>
                            <div className="flex justify-center">
                                <p className={` text-xs mt-2`}>{t('about:h5')}</p>
                            </div>
                        </div>
                        <div className="mt-9 relative">
                            <div
                                className="h-25 w-25 rounded-full flex justify-center items-center"
                                style={{ backgroundColor: '#B1E8E0' }}
                            >
                                <div className="text-7xl opacity-60 font-bold mt-3 select-none">
                                    ?
                                </div>
                            </div>
                            <p className={`text-sm mt-2 ${isRTL ? '-mr-5' : '-ml-5'}`}>
                                {t('about:h2')}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        <button className="w-64 border border-green-550 p-2 text-gray-600">
                            <a href="mailto:info@shopify.ir">
                                {isRTL ? ' ارسال رزومه' : 'Send Resume'}
                            </a>
                        </button>
                    </div>
                </div>
                <div className="lg:hidden md:hidden block">
                    <div className="lg:flex md:flex justify-between lg:px-32 lg:mt-28 mt-16">
                        <div className="flex justify-between">
                            <div>
                                <User className={`${isRTL ? 'ml-3' : 'ml-5'}`} />
                                <p className="text-sm">{t('about:h4')}</p>
                                <div className="flex justify-center">
                                    <p className={` text-xs mt-2`}>{t('about:h5')}</p>
                                </div>
                            </div>
                            <div>
                                <User className={`${isRTL ? 'ml-3' : 'ml-5'}`} />
                                <p className="text-sm">{t('about:h4')}</p>
                                <div className="flex justify-center">
                                    <p className={` text-xs mt-2`}>{t('about:h5')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="mt-12 relative">
                                <div className="flex justify-center items-center">
                                    <Add className={`${isRTL ? 'ml-3' : 'ml-5'}`} />
                                    <div className="absolute top-10 text-7xl opacity-60 font-bold -mt-5 ml-5">
                                        ?
                                    </div>
                                </div>
                                <p className="text-sm">{t('about:h2')}</p>
                            </div>
                            <div>
                                <User className={`${isRTL ? 'ml-3' : 'ml-5'}`} />
                                <p className="text-sm">{t('about:h4')}</p>
                                <div className="flex justify-center">
                                    <p className={` text-xs mt-2`}>{t('about:h5')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        <button className="w-64 border border-green-550 p-2 text-gray-600">
                            <a href="mailto:info@shopify.ir">
                                {isRTL ? ' ارسال رزومه' : 'Send Resume'}
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className=" bottom-0 w-full h-auto lg:mt-0 md:mt-0 mt-90">
                <Footer />
            </div>
        </div>
    );
}
