import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import data from 'data.json';
import cn from 'classnames';

import Footer from '@components/Footer';
import { Fade, Bounce, Zoom, Flip } from 'react-awesome-reveal';
import useTranslation from 'next-translate/useTranslation';

import Alarm from '@assets/svg/shopify/alarm.svg';
import Heart from '@assets/svg/shopify/heart.svg';
import Location from '@assets/svg/shopify/location.svg';
import Cart from '@assets/svg/shopify/cart.svg';
import Time from '@assets/svg/shopify/time.svg';
import PageCard from '@assets/svg/shopify/pageCard.svg';
import Tik from '@assets/svg/shopify/tik.svg';
import Close from '@assets/svg/shopify/close.svg';
import Cart1 from '@assets/svg/shopify/cart1.svg';
import Cart3 from '@assets/svg/shopify/cart3.svg';
import Cart4 from '@assets/svg/shopify/cart4.svg';
import Tik1 from '@assets/svg/shopify/tik1.svg';
import Line1 from '@assets/svg/shopify/line1.svg';
import Line2 from '@assets/svg/shopify/line2.svg';
import Chart from '@assets/svg/shopify/chart.svg';

import Style from './style.module.css';

export default function index() {
    const [video, setVideo] = useState<any>(true);
    const [page, setPage] = useState<string>('p');
    const div = useRef<any>(null);

    const router = useRouter();
    const { id } = router.query;

    const handleClick = () => {
        let a = page;
        if (a == 'p') {
            a = 'p1';
        } else a = 'p';

        setPage(a);
    };

    React.useEffect(() => {
        if (id && 1) div.current.scrollIntoView({ behavior: 'smooth' });
        if (id && 0) console.log('no');
    }, []);

    const download = () => {
        div.current.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const { t, lang } = useTranslation();

    const isRTL = lang === 'fa' || lang === 'he';

    const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

    const items = data.service;

    return (
        <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`relative w-full max-w-8xl mx-auto  flex flex-col min-h-screen ${arrow}`}
        >
            <div className="bg-green-20 lg:p-32 md:p-20 lg:flex lg:justify-center w-full">
                <div className="lg:flex">
                    <div className={`lg:h-96 lg:w-1/2  p-5 ${page == 'p' ? 'block' : 'hidden'} `}>
                        <Fade direction="right" delay={500}>
                            <div className="px-5">
                                <p
                                    className={cn(
                                        Style.title,
                                        ' lg:text-4xl text-2xl mt-20 font-bold',
                                    )}
                                >
                                    {t('home:title')}
                                </p>
                                <p className="mt-5 lg:text-base leading-9 text-sm flex justify-center">
                                    <p className={cn(Style.alltext, 'leading-8')}>{t('home:p')}</p>
                                </p>
                            </div>
                        </Fade>
                        <Fade delay={700}>
                            <div className="mt-10 flex justify-between">
                                <div>
                                    <button
                                        onClick={download}
                                        className={`${
                                            isRTL ? 'mr-5' : 'ml-5'
                                        } text-white bg-green-550 rounded-full p-2 w-36 outline-none`}
                                    >
                                        {t('home:button')}
                                    </button>
                                </div>
                                <div className="flex ml-10">
                                    <div
                                        onClick={handleClick}
                                        className={cn(
                                            `font-bold w-7 h-7 rounded-full flex items-center justify-center text-black cursor-pointer ${
                                                page == 'p'
                                                    ? 'bg-green-550 text-white'
                                                    : 'bg-white text-black'
                                            }`,
                                        )}
                                    >
                                        1
                                    </div>
                                    <div
                                        onClick={handleClick}
                                        className={cn(
                                            `font-bold w-7 h-7 rounded-full flex items-center justify-center text-black cursor-pointer mr-5 ${
                                                page == 'p1'
                                                    ? 'bg-green-550 text-white'
                                                    : 'bg-white text-black'
                                            } ${isRTL ? '' : 'ml-5'}`,
                                        )}
                                    >
                                        2
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div
                        className={`lg:h-96 lg:w-1/2 md:w-1/2 lg:mt-10 p-5 ${
                            page == 'p1' ? 'block' : 'hidden'
                        }`}
                    >
                        <Fade direction="right" delay={500}>
                            <div className="px-7 mt-20">
                                <p className={cn(Style.title, ' lg:text-4xl text-2xl font-bold')}>
                                    {t('home:title')}
                                </p>
                                <p className={cn(Style.alltext, 'mt-5 text-base leading-9')}>
                                    {t('home:p')}
                                </p>
                            </div>
                        </Fade>
                        <Fade delay={700}>
                            <div className="mt-10 flex justify-between">
                                <div>
                                    <button
                                        onClick={download}
                                        className="text-white bg-green-550 rounded-full p-2 w-36 mr-5 outline-none"
                                    >
                                        {t('home:button')}
                                    </button>
                                </div>
                                <div className="flex ml-10">
                                    <div
                                        onClick={handleClick}
                                        className={cn(
                                            `font-bold w-7 h-7 rounded-full flex items-center justify-center text-black cursor-pointer ${
                                                page == 'p'
                                                    ? 'bg-green-550 text-white'
                                                    : 'bg-white text-black'
                                            }`,
                                        )}
                                    >
                                        1
                                    </div>
                                    <div
                                        onClick={handleClick}
                                        className={cn(
                                            `font-bold w-7 h-7 rounded-full flex items-center justify-center text-black cursor-pointer mr-5 ${
                                                page == 'p1'
                                                    ? 'bg-green-550 text-white'
                                                    : 'bg-white text-black'
                                            }  ${isRTL ? '' : 'ml-10'}`,
                                        )}
                                    >
                                        2
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div>
                        <Bounce delay={500}>
                            <div className={`flex justify-center mt-20`}>
                                <video
                                    className={` ${isRTL ? '' : 'lg:ml-52'} lg:mr-60 w-72`}
                                    src="/images/video.mp4"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>

            <div className="h-auto bg-green-10 mt-1">
                <div className="-mt-9 ">
                    <div className="flex justify-center mt-10">
                        <div className="mt-16">
                            <p className="text-xs text-gray-500">{t('home:t')}</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={Style.text}>
                            <p className="text-lg font-bold mt-2">{t('home:h3')}</p>
                        </div>
                    </div>

                    <Fade delay={500}>
                        <div className="lg:overflow-hidden md:overflow-hidden lg:flex justify-center overflow-x-auto px-5 mt-5 p-5">
                            <div className="flex justify-between lg:w-full lg:px-52 md:px-44 md:w-full w-100 ml-10 overflow-hidden">
                                <div className="">
                                    <div
                                        className={cn(
                                            Style.border,
                                            'flex justify-center items-center',
                                        )}
                                    >
                                        <Time className="w-9" />
                                    </div>

                                    <div className="ml-3 mt-2">
                                        <p className="">{t('home:h4')}</p>
                                        <p className=" text-xs mr-3 opacity-60 mt-2">
                                            {t('home:h4')}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div
                                        className={cn(
                                            Style.border,
                                            'flex justify-center items-center  transform rotate-180',
                                        )}
                                    >
                                        <Time className="w-9  transform -rotate-180" />
                                    </div>
                                    <div className="ml-3 mt-2">
                                        <p className="">{t('home:h4')}</p>
                                        <p className=" text-xs mr-3 opacity-60 mt-2">
                                            {t('home:h4')}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div
                                        className={cn(
                                            Style.border,
                                            'flex justify-center items-center',
                                        )}
                                    >
                                        <Cart className="w-9" />
                                    </div>
                                    <div className="ml-3 mt-2">
                                        <p className="">{t('home:h4')}</p>
                                        <p className=" text-xs mr-3 opacity-60 mt-2">
                                            {t('home:h4')}
                                        </p>
                                    </div>
                                </div>

                                <div className="">
                                    <div
                                        className={cn(
                                            Style.border,
                                            'flex justify-center items-center  transform rotate-180',
                                        )}
                                    >
                                        <Location className="w-7  transform rotate-180" />
                                    </div>
                                    <div className="ml-3 mt-2">
                                        <p className="">{t('home:h4')}</p>
                                        <p className=" text-xs mr-3 opacity-60 mt-2">
                                            {t('home:h4')}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div
                                        className={cn(
                                            Style.border,
                                            'flex justify-center items-center ',
                                        )}
                                    >
                                        <Heart className="w-9" />
                                    </div>
                                    <div className="ml-3 mt-2">
                                        <p className="">{t('home:h4')}</p>
                                        <p className=" text-xs mr-3 opacity-60 mt-2">
                                            {t('home:h4')}
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <div
                                        className={cn(
                                            Style.border,
                                            'flex justify-center items-center transform rotate-180',
                                        )}
                                    >
                                        <Alarm className="w-9  transform rotate-180" />
                                    </div>
                                    <div className="ml-3 mt-2">
                                        <p className="">{t('home:h4')}</p>
                                        <p className="text-xs mr-3 opacity-60">{t('home:h4')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

                <Fade direction="right" delay={500}>
                    <div className="lg:mt-28 lg:p-10 p-5">
                        <div className="lg:flex lg:px-16 p-5 lg:justify-around">
                            <div className="lg:w-1/2 mt-24">
                                <p className={cn(Style.text, 'text-xl font-bold ')}>
                                    {t('home:p-title')}
                                </p>
                                <p className={cn(Style.alltext, 'mt-7 lg:text-base text-sm ')}>
                                    <p className="leading-8">{t('home:h5')}</p>
                                </p>
                                <p className="opacity-60 mt-10 text-xs">{t('home:h6')}</p>
                            </div>
                            <div className="-mt-14 flex justify-center">
                                <PageCard className="w-72" />
                            </div>
                        </div>
                    </div>
                </Fade>

                <div className="lg:px-28 md:px-24">
                    <div className="flex justify-center">
                        <p className="text-sm opacity-70">{t('home:h7')}</p>
                    </div>
                    <div className="flex justify-center">
                        <p className={cn(Style.text, 'text-xl mt-2 font-bold ')}>{t('home:h3')}</p>
                    </div>
                    <div className="lg:flex lg:px-28 lg:justify-between md:justify-between mt-16 px-12">
                        <Fade direction="up" delay={300}>
                            <div className="flex justify-center">
                                <div className="bg-white w-72 h-72  rounded-lg mt-5 shadow-2xl md:ml-10">
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                                    </div>
                                    <div className="flex justify-center mt-10">
                                        <div className="px-5">
                                            <div className="flex justify-center">
                                                <p className="text-lg opacity-75 font-bold">
                                                    {t('home:h5-title1')}
                                                </p>
                                            </div>
                                            <p className="text-xs mt-5  text-center">
                                                <p className={cn(Style.alltext, 'leading-5')}>
                                                    {t('home:p1')}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction="up" delay={500}>
                            <div className="flex justify-center">
                                <div className="bg-white w-72 h-72  rounded-lg mt-5 shadow-2xl md:ml-10">
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                                    </div>
                                    <div className="flex justify-center mt-10">
                                        <div className="px-5">
                                            <div className="flex justify-center">
                                                <p className="text-lg opacity-75 font-bold">
                                                    {t('home:h5-title2')}
                                                </p>
                                            </div>
                                            <p className="text-xs mt-5  text-center">
                                                <p className={cn(Style.alltext, 'leading-5')}>
                                                    {t('home:p1')}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction="up" delay={700}>
                            <div className="flex justify-center md:ml-10">
                                <div className="bg-white w-72 h-72  rounded-lg mt-5 shadow-2xl">
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                                    </div>
                                    <div className="flex justify-center mt-10">
                                        <div className="px-5">
                                            <div className="flex justify-center">
                                                <p className="text-lg opacity-70 font-bold">
                                                    {t('home:h5-title3')}
                                                </p>
                                            </div>
                                            <p className="text-xs mt-5 text-center">
                                                <p className={cn(Style.alltext, 'leading-5')}>
                                                    {t('home:p1')}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="lg:mt-32 mt-20 ">
                    <div className="">
                        <div className="flex justify-center">
                            <p className="text-sm opacity-70 ">{t('home:h8')}</p>
                        </div>
                        <div className="flex justify-center">
                            <p className={cn(Style.text, 'font-bold mt-2')}>{t('home:h3')}</p>
                        </div>
                    </div>

                    <Fade delay={500}>
                        <div className="flex justify-center lg:px-10 mr-5">
                            <Chart className="lg:w-5/6" />
                        </div>
                    </Fade>
                    <div
                        className={` lg:px-28 lg:mt-5 md:mt-5 -mt-52`}
                        style={{ direction: 'rtl' }}
                    >
                        <div className="flex px-3">
                            <div className="w-1/2 lg:px-20 p-3">
                                <div className="flex justify-center">
                                    <p className="lg:text-lg text-xs font-bold text-green-550">
                                        {t('home:h9')}
                                    </p>
                                </div>
                                <p className="mt-2 lg:text-sm text-xs text-center p-2 opacity-70">
                                    {t('home:p-title1')}
                                </p>
                                <div className="mt-16 flex justify-center">
                                    <Tik />
                                </div>
                            </div>
                            <div className="w-1/2 lg:px-20 p-3 ">
                                <div className="flex justify-center">
                                    <p className="lg:text-lg text-xs font-bold text-indigo-400">
                                        {t('home:h10')}
                                    </p>
                                </div>
                                <p className="mt-2 lg:text-sm text-xs text-center p-2 opacity-70">
                                    {t('home:p-title1')}
                                </p>
                                <div className="mt-16 flex justify-center">
                                    <Close />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" style={{ direction: 'rtl' }}>
                    <div className="lg:flex  lg:mr-52 mt-28 lg:px-10">
                        <div className=" h-72 lg:w-1/2 lg:mt-10 px-5 ">
                            <Fade direction="right">
                                <div className={`px-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <div className="">
                                        <p className={cn(Style.text, 'text-lg font-bold')}>
                                            {t('home:p-title')}
                                        </p>
                                    </div>
                                    <p className={cn(Style.alltext, 'mt-3 text-sm  leading-7')}>
                                        {t('home:p-title2')}
                                    </p>
                                </div>
                            </Fade>
                            <Zoom>
                                <div className="flex justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
                                    <div
                                        className={cn(Style.alltext, 'lg:mt-20 lg:w-80 ml-5 mt-10')}
                                    >
                                        <div className="flex">
                                            <p className="mt-2 text-xs mr-3">
                                                {t('home:p-title3')}
                                            </p>
                                        </div>
                                        <div className="flex mt-3">
                                            <p className="mt-2 text-xs mr-3">
                                                {t('home:p-title3')}
                                            </p>
                                        </div>
                                        <div className="flex mt-3">
                                            <p className="mt-2 text-xs mr-3">
                                                {t('home:p-title3')}
                                            </p>
                                        </div>
                                        <div className="flex mt-3">
                                            <p className="mt-2 text-xs mr-3">
                                                {t('home:p-title3')}
                                            </p>
                                        </div>
                                        <div className="flex mt-3">
                                            <p className="mt-2 text-xs mr-3">
                                                {t('home:p-title3')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                        <Fade>
                            <div className="p-5 lg:mt-0 mt-64 lg:h-screen lg:flex justify-center ">
                                <div className="lg:w-1/2 ">
                                    <Fade delay={400}>
                                        <div className="flex justify-center">
                                            <div className="rounded-r-3xl w-20 h-auto bg-blue-20 flex items-center justify-center p-2">
                                                <Cart1 className="w-14" />
                                            </div>
                                            <div className="rounded-l-3xl bg-white w-auto h-auto">
                                                <div className="flex justify-center">
                                                    <p className="mt-3 text-sm font-bold text-gray-700">
                                                        {t('home:h2')}
                                                    </p>
                                                </div>
                                                <div className="p-5">
                                                    <p className=" text-xs text-center opacity-80">
                                                        {t('home:p-1')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex justify-center -mt-5">
                                            <Line1 />
                                        </div>
                                    </Fade>
                                    <Fade delay={600}>
                                        <div className="flex justify-center -mt-5">
                                            <div className="rounded-r-3xl bg-white w-auto  h-auto">
                                                <div className="flex justify-center">
                                                    <p className="mt-3 text-sm font-bold text-gray-700">
                                                        {t('home:h2')}
                                                    </p>
                                                </div>
                                                <div className="p-5">
                                                    <p className=" text-xs text-center opacity-80">
                                                        {t('home:p-1')}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="rounded-l-3xl w-20  h-auto bg-blue-10 flex items-center justify-center p-2">
                                                <Cart3 className="w-14" />
                                            </div>
                                        </div>
                                        <div className=" flex justify-center -mt-5">
                                            <Line2 />
                                        </div>
                                    </Fade>
                                    <Fade delay={700}>
                                        <div className="flex justify-center">
                                            <div className="rounded-r-3xl w-20 h-auto bg-blue-30 flex items-center justify-center p-2">
                                                <Cart4 className="w-14" />
                                            </div>
                                            <div className="rounded-l-3xl bg-white w-au h-auto">
                                                <div className="flex justify-center">
                                                    <p className="mt-3 text-sm font-bold text-gray-700">
                                                        {t('home:h2')}
                                                    </p>
                                                </div>
                                                <div className="p-5">
                                                    <p className=" text-xs text-center opacity-80">
                                                        {t('home:p-1')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div ref={div} className="" dir="rtl">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
