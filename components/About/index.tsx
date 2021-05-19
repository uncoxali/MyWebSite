import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Style from './style.module.css';

import data from 'data.json';
import useTranslation from 'next-translate/useTranslation';

import User from '@assets/svg/icons/about-user.svg';
import Line from '@assets/svg/icons/line-about.svg';
import Line2 from '@assets/svg/icons/line-about2.svg';
// import Question from '@assets/svg/icons/question-icon.svg';

import cn from 'classnames';

export default function index() {
    const { t, lang } = useTranslation();

    const isRTL = lang === 'fa' || lang === 'he';

    const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

    return (
        <div className="bg-green-10" dir={isRTL ? 'rtl' : 'ltr'}>
            <Navbar />
            <div className="h-screen lg:mt-40 w-full lg:px-28 md:px-28 px-10">
                <div className="lg:mt-0 md:mt-0 mt-20">
                    <p className={cn(Style.text, 'text-xl font-bold')}>{t('about:title')}</p>
                    <div className="mt-8 lg:w-2/3 md:w-2/3 w-full ">
                        <p className={cn(Style.title, 'text-sm opacity-75 leading-8')}>
                            {t('about:p')}
                        </p>
                    </div>
                </div>
                <div className="lg:block md:block hidden">
                    <div className="lg:flex md:flex justify-between lg:px-32 lg:mt-28">
                        <div>
                            <User className="mr-2" />
                            <p className="text-sm">{t('about:h4')}</p>
                            <div className="flex justify-center">
                                <p className="text-xs mt-2">{t('about:h5')}</p>
                            </div>
                        </div>
                        <div>
                            <User className="mr-2" />
                            <p className="text-sm">{t('about:h4')}</p>
                            <div className="flex justify-center">
                                <p className="text-xs mt-2">{t('about:h5')}</p>
                            </div>
                        </div>

                        <div>
                            <User className="mr-2" />
                            <p className="text-sm">{t('about:h4')}</p>
                            <div className="flex justify-center">
                                <p className="text-xs mt-2">{t('about:h5')}</p>
                            </div>
                        </div>
                        <div>
                            <User className="mr-2" />
                            <p className="text-sm">{t('about:h4')}</p>
                            <div className="flex justify-center">
                                <p className="text-xs mt-2">{t('about:h5')}</p>
                            </div>
                        </div>
                        {/* <div className="flex justify-between">
                                <div></div>
                                <div className=" w-24 h-24 rounded-full bg-blue-300 flex justify-center items-center">
                                    <h1 className="text-7xl text-gray-400 font-bold">?</h1>
                                </div>
                            </div> */}
                    </div>
                </div>
                <div className="lg:hidden md:hidden block">
                    <div className="lg:flex md:flex justify-between lg:px-32 lg:mt-28">
                        <div className="flex justify-between">
                            <div>
                                <User className="mr-2" />
                                <p className="text-sm">{t('about:h4')}</p>
                                <div className="flex justify-center">
                                    <p className="text-xs mt-2">{t('about:h5')}</p>
                                </div>
                            </div>
                            <div>
                                <User className="mr-2" />
                                <p className="text-sm">{t('about:h4')}</p>
                                <div className="flex justify-center">
                                    <p className="text-xs mt-2">{t('about:h5')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <User className="mr-2" />
                                <p className="text-sm">{t('about:h4')}</p>
                                <div className="flex justify-center">
                                    <p className="text-xs mt-2">{t('about:h5')}</p>
                                </div>
                            </div>
                            <div>
                                <User className="mr-2" />
                                <p className="text-sm">{t('about:h4')}</p>
                                <div className="flex justify-center">
                                    <p className="text-xs mt-2">{t('about:h5')}</p>
                                </div>
                            </div>
                            {/* <div className="flex justify-between">
                                <div></div>
                                <div className=" w-24 h-24 rounded-full bg-blue-300 flex justify-center items-center">
                                    <h1 className="text-7xl text-gray-400 font-bold">?</h1>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bottom-0 w-full h-auto mt-44" dir="rtl">
                <Footer />
            </div>
        </div>
    );
}
