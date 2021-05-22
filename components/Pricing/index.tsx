import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import cn from 'classnames';

import Card from '@assets/svg/shopify/card.svg';
import Cafe from '@assets/svg/icons/cafe.svg';
import Brons from '@assets/svg/icons/brons.svg';
import Taj from '@assets/svg/icons/taj.svg';
import Icon1 from '@assets/svg/icons/icon1.svg';
import useTranslation from 'next-translate/useTranslation';

import Style from '../About/style.module.css';

export default function index() {
    const { t, lang } = useTranslation();

    const isRTL = lang === 'fa' || lang === 'he';

    const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);
    return (
        <>
            <div className="bg-green-10 relative" dir="rtl">
                <div className="bg-green-10">
                    <Navbar />
                    <div className="h-screen w-full lg:px-32 md:px-10 px-5">
                        <div className="" dir={isRTL ? 'rtl' : 'ltr'}>
                            <p className={cn(Style.text, 'font-bold mt-32 text-2xl')}>
                                {t('prising:title')}
                            </p>
                        </div>
                        <div className="lg:hidden md:block hidden">
                            <div className="mt-32  md:flex md:justify-between">
                                <div>
                                    <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                        <div className="w-75 h-90 border-2 border-primary rounded-2xl ">
                                            <div className="flex justify-center mt-3">
                                                <p className={cn(Style.text, 'font-bold')}>
                                                    {t('prising:h5')}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-7">
                                                <div className="border border-primary h-24 w-24 rounded-full flex justify-center items-center">
                                                    <Cafe />
                                                </div>
                                            </div>
                                            <div className="flex justify-center relative">
                                                <div className="absolute mt-14">
                                                    <div className="mt-5 mr-3 flex justify-center">
                                                        <div className="-mt-8">
                                                            <button
                                                                className={cn(
                                                                    Style.btnColor,
                                                                    'border border-primary bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                                )}
                                                            >
                                                                {t('prising:h2')}
                                                            </button>
                                                            <div className="mt-5 mr-3">
                                                                <p className="text-3xl text-white font-bold">
                                                                    {t('prising:h3')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-white text-center mt-10 font-bold px-3">
                                                        {t('prising:p')}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-7">
                                                <Card className="w-72" fill="#3ACFB3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                        <div className="w-75 h-90 border-2 border-red-10 rounded-2xl">
                                            <div className="flex justify-center mt-3">
                                                <p className={cn(Style.text, 'font-bold')}>
                                                    {t('prising:h5')}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-7">
                                                <div className="border border-red-10 h-24 w-24 rounded-full flex justify-center items-center">
                                                    <Brons />
                                                </div>
                                            </div>
                                            <div className="flex justify-center relative">
                                                <div className="absolute mt-14">
                                                    <div className="mt-5 mr-3 flex justify-center">
                                                        <div className="-mt-8">
                                                            <button
                                                                className={cn(
                                                                    Style.btnColor,
                                                                    'border border-red-10 bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                                )}
                                                            >
                                                                {t('prising:h2')}
                                                            </button>
                                                            <div className="mt-5 mr-3">
                                                                <p className="text-3xl text-white font-bold">
                                                                    {t('prising:h3')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-white text-center mt-10 font-bold px-3">
                                                        {t('prising:p')}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-7">
                                                <Card className="w-72" fill="#F6A27E" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                        <div className="w-75 h-90 border-2 border-gray-10 rounded-2xl">
                                            <div className="flex justify-center mt-3">
                                                <p className={cn(Style.text, 'font-bold')}>
                                                    {t('prising:h5')}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-7">
                                                <div className="border border-gray-10 h-24 w-24 rounded-full flex justify-center items-center">
                                                    <Taj />
                                                </div>
                                            </div>
                                            <div className="flex justify-center relative">
                                                <div className="absolute mt-14">
                                                    <div className="mt-5 mr-3 flex justify-center">
                                                        <div className="-mt-8">
                                                            <button
                                                                className={cn(
                                                                    Style.btnColor,
                                                                    'border border-gray-10 bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                                )}
                                                            >
                                                                {t('prising:h2')}
                                                            </button>
                                                            <div className="mt-5 mr-3">
                                                                <p className="text-3xl text-white font-bold">
                                                                    {t('prising:h3')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-white text-center mt-10 font-bold px-3">
                                                        {t('prising:p')}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-7">
                                                <Card className="w-72" fill="#8A8E96" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                        <div className="w-75 h-90 border-2 border-yellow-10 rounded-2xl">
                                            <div className="flex justify-center mt-3">
                                                <p className={cn(Style.text, 'font-bold')}>
                                                    {t('prising:h5')}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-7">
                                                <div className="border border-yellow-10 h-24 w-24 rounded-full flex justify-center items-center">
                                                    <Icon1 />
                                                </div>
                                            </div>
                                            <div className="flex justify-center relative">
                                                <div className="absolute mt-14">
                                                    <div className="mt-5 mr-3 flex justify-center">
                                                        <div className="-mt-8">
                                                            <button
                                                                className={cn(
                                                                    Style.btnColor,
                                                                    'border border-yellow-10 bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                                )}
                                                            >
                                                                {t('prising:h2')}
                                                            </button>
                                                            <div className="mt-5 mr-3">
                                                                <p className="text-3xl text-white font-bold">
                                                                    {t('prising:h3')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-white text-center mt-10 font-bold px-3">
                                                        {t('prising:p')}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-7">
                                                <Card className="w-72" fill="#F3C56D" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:block md:hidden block">
                            <div className="mt-10 lg:flex md:flex lg:justify-between md:justify-between">
                                <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                    <div className="w-75 h-90 border-2 border-primary rounded-2xl ">
                                        <div className="flex justify-center mt-3">
                                            <p className={cn(Style.text, 'font-bold')}>
                                                {t('prising:h5')}
                                            </p>
                                        </div>
                                        <div className="flex justify-center mt-7">
                                            <div className="border border-primary h-24 w-24 rounded-full flex justify-center items-center">
                                                <Cafe />
                                            </div>
                                        </div>
                                        <div className="flex justify-center relative">
                                            <div className="absolute mt-14">
                                                <div className="mt-5 mr-3 flex justify-center">
                                                    <div className="-mt-8">
                                                        <button
                                                            className={cn(
                                                                Style.btnColor,
                                                                'border border-primary bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                            )}
                                                        >
                                                            {t('prising:h2')}
                                                        </button>
                                                        <div className={`mt-5 mr-3 `}>
                                                            <p
                                                                className={`${
                                                                    isRTL ? '' : 'mr-2'
                                                                } text-3xl text-white font-bold `}
                                                            >
                                                                {t('prising:h3')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-white text-center mt-10 font-bold px-3">
                                                    {t('prising:p')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-7">
                                            <Card className="w-72" fill="#3ACFB3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                    <div className="w-75 h-90 border-2 border-red-10 rounded-2xl">
                                        <div className="flex justify-center mt-3">
                                            <p className={cn(Style.text, 'font-bold mt-6')}></p>
                                        </div>
                                        <div className="flex justify-center mt-7">
                                            <div className="border border-red-10 h-24 w-24 rounded-full flex justify-center items-center">
                                                <Brons />
                                            </div>
                                        </div>
                                        <div className="flex justify-center relative">
                                            <div className="absolute mt-14">
                                                <div className="mt-5 mr-3 flex justify-center">
                                                    <div className="-mt-8">
                                                        <button
                                                            className={cn(
                                                                'border border-red-10 bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                            )}
                                                            style={{ color: '#F6A27E' }}
                                                        >
                                                            {t('prising:h2')}
                                                        </button>
                                                        <div className="mt-5 mr-3">
                                                            <p
                                                                className={`text-3xl text-white font-bold ${
                                                                    isRTL ? '' : 'mr-2'
                                                                }`}
                                                            >
                                                                {t('prising:h3')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-white text-center mt-10 font-bold px-3">
                                                    {t('prising:p')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-7">
                                            <Card className="w-72" fill="#F6A27E" />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                    <div className="w-75 h-90 border-2 border-gray-10 rounded-2xl">
                                        <div className="flex justify-center mt-3">
                                            <p className={cn(Style.text, 'font-bold mt-6')}></p>
                                        </div>
                                        <div className="flex justify-center mt-7">
                                            <div className="border border-gray-10 h-24 w-24 rounded-full flex justify-center items-center">
                                                <Taj />
                                            </div>
                                        </div>
                                        <div className="flex justify-center relative">
                                            <div className="absolute mt-14">
                                                <div className="mt-5 mr-3 flex justify-center">
                                                    <div className="-mt-8">
                                                        <button
                                                            className={cn(
                                                                'border border-gray-10 bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                            )}
                                                            style={{ color: '#8A8E96' }}
                                                        >
                                                            {t('prising:h2')}
                                                        </button>
                                                        <div className="mt-5 mr-3">
                                                            <p
                                                                className={`text-3xl text-white font-bold ${
                                                                    isRTL ? '' : 'mr-2'
                                                                }`}
                                                            >
                                                                {t('prising:h3')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-white text-center mt-10 font-bold px-3">
                                                    {t('prising:p')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-7">
                                            <Card className="w-72" fill="#8A8E96" />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex-none md:flex-none flex justify-center mt-5">
                                    <div className="w-75 h-90 border-2 border-yellow-10 rounded-2xl">
                                        <div className="flex justify-center mt-3">
                                            <p className={cn(Style.text, 'font-bold mt-6')}></p>
                                        </div>
                                        <div className="flex justify-center mt-7">
                                            <div className="border border-yellow-10 h-24 w-24 rounded-full flex justify-center items-center">
                                                <Icon1 />
                                            </div>
                                        </div>
                                        <div className="flex justify-center relative">
                                            <div className="absolute mt-14">
                                                <div className="mt-5 mr-3 flex justify-center">
                                                    <div className="-mt-8">
                                                        <button
                                                            className={cn(
                                                                'border border-yellow-10 bg-green-10 p-3 rounded-2xl  text-2xl ml-3',
                                                            )}
                                                            style={{ color: '#F3C56D' }}
                                                        >
                                                            {t('prising:h2')}
                                                        </button>
                                                        <div className="mt-5 mr-3">
                                                            <p
                                                                className={`text-3xl text-white font-bold ${
                                                                    isRTL ? '' : 'mr-2'
                                                                }`}
                                                            >
                                                                {t('prising:h3')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-white text-center mt-10 font-bold px-3">
                                                    {t('prising:p')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-7">
                                            <Card className="w-72" fill="#F3C56D" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-10">
                    <div className="lg:h-0 md:h-screen h-screen "></div>
                    <div className="lg:h-0 md:h-screen h-screen "></div>
                    <div className="lg:h-0 md:h-52 h-52 "></div>
                    <div className=" bottom-0 w-full h-auto">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
