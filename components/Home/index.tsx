import React, { useState } from 'react';

import data from 'data.json';
import cn from 'classnames';

import Border from '@assets/svg/shopify/border.svg';
import Alarm from '@assets/svg/shopify/alarm.svg';
import Heart from '@assets/svg/shopify/heart.svg';
import Location from '@assets/svg/shopify/location.svg';
import Cart from '@assets/svg/shopify/cart.svg';
import Time from '@assets/svg/shopify/time.svg';
import PageCard from '@assets/svg/shopify/pageCard.svg';
import Service from '@assets/svg/shopify/service.svg';
import User1 from '@assets/svg/shopify/user1.svg';
import User2 from '@assets/svg/shopify/user2.svg';
import Tik from '@assets/svg/shopify/tik.svg';
import Close from '@assets/svg/shopify/close.svg';
import Cart1 from '@assets/svg/shopify/cart1.svg';
import Cart2 from '@assets/svg/shopify/cart2.svg';
import Cart3 from '@assets/svg/shopify/cart3.svg';
import Cart4 from '@assets/svg/shopify/cart4.svg';
import Tik1 from '@assets/svg/shopify/tik1.svg';
import Line1 from '@assets/svg/shopify/line1.svg';
import Line2 from '@assets/svg/shopify/line2.svg';
import Footer_User from '@assets/svg/shopify/footer-user.svg';
import GooglePlay from '@assets/svg/shopify/googleplay.svg';
import AppleStore from '@assets/svg/shopify/applestore.svg';
import Youbube from '@assets/svg/icons/youtube.svg';

export default function index() {
    const [page, setPage] = useState<string>('p');

    const handleClick = () => {
        let a = page;
        if (a == 'p') {
            a = 'p1';
        } else a = 'p';

        setPage(a);
    };

    const items = data.service;

    return (
        <div className="">
            <div className="bg-green-20 lg:p-32 md:p-20 lg:flex lg:justify-center w-full">
                <div className="lg:flex">
                    <div className={`lg:h-96 lg:w-1/2  p-5 ${page == 'p' ? 'block' : 'hidden'} `}>
                        <div className="px-5">
                            <p className="lg:text-indigo-400 lg:text-4xl text-xl mt-20">
                                تغییر کن تا آیندرو حس کنی{' '}
                            </p>
                            <p className="mt-5 lg:text-sm text-xs flex justify-center opacity-70">
                                {data.titlePageOne}
                            </p>
                        </div>
                        <div className="mt-10 flex justify-between">
                            <div>
                                <button className="text-white bg-green-550 rounded-full p-2 w-40 lg:block md:block hidden">
                                    دانلود شاپیفای
                                </button>
                            </div>
                            <div className="flex">
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
                                        }`,
                                    )}
                                >
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`lg:h-96 lg:w-1/2 lg:mt-10 p-5 mt-20 ${
                            page == 'p1' ? 'block' : 'hidden'
                        }`}
                    >
                        <div className="px-7">
                            <p className="lg:text-indigo-400 lg:text-4xl text-xl">
                                تغییر کن تا آیندرو حس کنی{' '}
                            </p>
                            <p className="mt-5 opacity-70 text-xs">{data.titlePageTwo}</p>
                        </div>
                        <div className="mt-10 flex justify-between">
                            <div>
                                <button className="text-white bg-green-550 rounded-full p-2 w-40 lg:block md:block hidden">
                                    دانلود شاپیفای
                                </button>
                            </div>
                            <div className="flex">
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
                                        }`,
                                    )}
                                >
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-1/2 flex justify-center mt-20">
                        <img
                            className=" lg:mr-60"
                            src="/images/video.gif"
                            width="300px"
                            height="400px"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="h-auto bg-green-10">
                <div className="-mt-9 lg:block md:block hidden">
                    <div className="flex justify-center mt-10">
                        <div className="mt-5">
                            <p className="text-xs">برخی از</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <p className="text-lg">سرویس های شاپیفای</p>
                        </div>
                    </div>
                    <div className="flex justify-around px-28">
                        <div className="">
                            <div className="flex items-center justify-center">
                                <Border className="w-28 transform rotate-180" />
                                <Time className="absolute w-8" />
                            </div>
                            <div className="-mt-14 mr-3">
                                <p>فروشگاه آنلاین</p>
                                <p className="mr-2 opacity-60">online shop</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-center">
                                <Border className="w-28" />
                                <Time className="absolute w-8" />
                            </div>
                            <div className="-mt-14 mr-3">
                                <p>فروشگاه آنلاین</p>
                                <p className="mr-2 opacity-60">online shop</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-center">
                                <Border className="w-28 transform rotate-180" />
                                <Cart className="absolute w-8" />
                            </div>
                            <div className="-mt-14 mr-3">
                                <p>فروشگاه آنلاین</p>
                                <p className="mr-2 opacity-60">online shop</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-center">
                                <Border className="w-28" />
                                <Location className="absolute w-8" />
                            </div>
                            <div className="-mt-14 mr-3">
                                <p>فروشگاه آنلاین</p>
                                <p className="mr-2 opacity-60">online shop</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-center">
                                <Border className="w-28 transform rotate-180" />
                                <Heart className="absolute w-8" />
                            </div>
                            <div className="-mt-14 mr-3">
                                <p>فروشگاه آنلاین</p>
                                <p className="mr-2 opacity-60">online shop</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-center">
                                <Border className="w-28" />
                                <Alarm className="absolute w-8" />
                            </div>
                            <div className="-mt-14 mr-3">
                                <p>فروشگاه آنلاین</p>
                                <p className="mr-2 opacity-60">online shop</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:mt-28 lg:p-10">
                    <div className="lg:flex lg:px-16 p-5 lg:justify-around">
                        <div className="lg:w-1/2 mt-24">
                            <p className="text-xl">سادگی خرید فقط با 3 حرکت</p>
                            <p className="mt-10 lg:text-base text-xs opacity-70">
                                {data.titlePageThree}
                            </p>
                            <p className="opacity-70 mt-10 text-xs">اطلاعات بیشتر</p>
                        </div>
                        <div className="-mt-14 flex justify-center">
                            <PageCard className="w-72" />
                        </div>
                    </div>
                </div>

                <div className="lg:px-28">
                    <div className="flex justify-center">
                        <p className="text-sm opacity-70">مهمترین مزایا</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-xl">سرویس های شاپیفای</p>
                    </div>
                    <div className="lg:flex md:flex lg:justify-between md:justify-between mt-16 px-12">
                        <div className="flex justify-center">
                            <div className="bg-white w-72 h-72  rounded-lg mt-5 shadow-2xl md:ml-10">
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <div className="px-5">
                                        <div className="flex justify-center">
                                            <p className="text-lg opacity-75">{items[0].title}</p>
                                        </div>
                                        <p className="text-xs mt-5 opacity-60">
                                            {items[0].decription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-white w-72 h-72  rounded-lg mt-5 shadow-2xl md:ml-10">
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <div className="px-5">
                                        <div className="flex justify-center">
                                            <p className="text-lg opacity-75">{items[1].title}</p>
                                        </div>
                                        <p className="text-xs mt-5 opacity-60">
                                            {items[1].decription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-white w-72 h-72  rounded-lg mt-5 shadow-2xl">
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <div className="px-5">
                                        <div className="flex justify-center">
                                            <p className="text-lg opacity-70">{items[2].title}</p>
                                        </div>
                                        <p className="text-xs mt-5 opacity-60">
                                            {items[2].decription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-32 mt-20 ">
                    <div className="">
                        <div className="flex justify-center">
                            <p className="text-sm opacity-70">چرا بی استفاده</p>
                        </div>
                        <div className="flex justify-center">
                            <p>سرویس هاس شاپیفای</p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:mt-0 -mt-32">
                        <Service className="mt-2 px-5" />
                        <div className="flex absolute lg:mt-36 mt-20">
                            <User1 className="w-32 lg:w-80" />
                            <User1 className="w-32 lg:w-80" />
                        </div>
                    </div>
                    <div className=" lg:px-32 lg:mt-16 -mt-48">
                        <div className="flex justify-between">
                            <div className="w-1/2 lg:px-20 p-3">
                                <div className="flex justify-center">
                                    <p className="lg:text-lg text-sm font-bold text-green-550">
                                        فروش با استفاده از لینستو
                                    </p>
                                </div>
                                <p className="mt-2 lg:text-sm text-xs text-center p-2 opacity-70">
                                    {data.titlePageFour}
                                </p>
                                <div className="mt-16 flex justify-center">
                                    <Tik />
                                </div>
                            </div>
                            <div className="w-1/2 lg:px-20 p-3">
                                <div className="flex justify-center">
                                    <p className="lg:text-lg text-sm font-bold text-indigo-400">
                                        فروش از راه قدیمی{' '}
                                    </p>
                                </div>
                                <p className="mt-2 lg:text-sm text-xs text-center p-2 opacity-70">
                                    {data.titlePageFour}
                                </p>
                                <div className="mt-16 flex justify-center">
                                    <Close />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="lg:flex  lg:mr-52 mt-28 lg:px-10">
                        <div className=" h-72 lg:w-1/2 lg:mt-10 px-10 ">
                            <div className="flex justify-center">
                                <p className="text-lg">سادگی خرید فقط با 3 حرکت</p>
                            </div>
                            <p className="mt-3 text-xs opacity-70 text-right">
                                {data.titlePageFive}
                            </p>
                            <div className="flex justify-center">
                                <div className="lg:mt-20 lg:w-72">
                                    <div className="flex">
                                        <Tik1 className="w-7" />
                                        <p className="mt-2 text-xs opacity-80 mr-3">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ
                                        </p>
                                    </div>
                                    <div className="flex mt-3">
                                        <Tik1 className="w-7" />

                                        <p className="mt-2 text-xs opacity-80 mr-3">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ
                                        </p>
                                    </div>
                                    <div className="flex mt-3">
                                        <Tik1 className="w-7" />

                                        <p className="mt-2 text-xs opacity-80 mr-3">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ
                                        </p>
                                    </div>
                                    <div className="flex mt-3">
                                        <Tik1 className="w-7" />

                                        <p className="mt-2 text-xs opacity-80 mr-3">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ
                                        </p>
                                    </div>
                                    <div className="flex mt-3">
                                        <Tik1 className="w-7" />
                                        <p className="mt-2 text-xs opacity-80 mr-3">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ
                                        </p>
                                    </div>
                                    <div className="lg:mt-28 mt-10 flex justify-center">
                                        <button className="text-white bg-green-550 rounded-full p-2 w-40">
                                            دانلود شاپیفای
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 lg:mt-0 mt-52 h-screen lg:flex justify-center">
                            <div className="lg:w-1/2 ">
                                <div className="flex justify-center">
                                    <div className="rounded-r-3xl w-20 h-auto bg-blue-400 flex items-center justify-center">
                                        <Cart1 className="w-14" />
                                    </div>
                                    <div className="rounded-l-3xl bg-white w-auto h-auto">
                                        <div className="flex justify-center">
                                            <p className="mt-3 text-sm">سادگی و سهولت خرید</p>
                                        </div>
                                        <div className="p-5">
                                            <p className=" text-xs text-center opacity-80">
                                                {data.cartText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center -mt-5">
                                    <Line1 />
                                </div>
                                <div className="flex justify-center -mt-5">
                                    <div className="rounded-r-3xl bg-white w-auto  h-auto">
                                        <div className="flex justify-center">
                                            <p className="mt-3 text-sm">سادگی و سهولت خرید</p>
                                        </div>
                                        <div className="p-5">
                                            <p className=" text-xs text-center opacity-80">
                                                {data.cartText}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-l-3xl w-20  h-auto bg-green-400 flex items-center justify-center">
                                        <Cart3 className="w-14" />
                                    </div>
                                </div>
                                <div className=" flex justify-center -mt-5">
                                    <Line2 />
                                </div>
                                <div className="flex justify-center">
                                    <div className="rounded-r-3xl w-20 h-auto bg-blue-400 flex items-center justify-center">
                                        <Cart4 className="w-14" />
                                    </div>
                                    <div className="rounded-l-3xl bg-white w-au h-auto">
                                        <div className="flex justify-center">
                                            <p className="mt-3 text-sm">سادگی و سهولت خرید</p>
                                        </div>
                                        <div className="p-5">
                                            <p className=" text-xs text-center opacity-80">
                                                {data.cartText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:mt-36 lg:px-48 mt-52 px-5">
                    <div className=" lg:flex rounded-3xl lg:h-72 h-screen bg-blue-400">
                        <div className="h-80 lg:w-1/2 blue-500 lg:px-0 px-10 flex justify-center">
                            <div className="lg:flex absolute">
                                <Footer_User className="-mt-16 lg:w-80 w-60 items-center" />
                            </div>
                        </div>
                        <div className="lg:flex-none md:flex flex justify-center">
                            <div className="lg:w-1/2 lg:h-80">
                                <div className="px-3">
                                    <p className="text-lg text-white mt-3">
                                        {' '}
                                        همین حالا دانلود کنید
                                    </p>
                                    <p className="text-white text-xs mt-3">
                                        !!اپلیکیشن شاپیفای را میتونید از بستر های زیر دانلود کنید
                                    </p>
                                </div>
                                <div className="flex mt-6 px-4">
                                    <div>
                                        <p className="text-white text-xs">نسخه ی اندروید</p>
                                        <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-36">
                                            <GooglePlay className="ml-3" />
                                            <p className="text-xs text-white ">
                                                دریافت از google play
                                            </p>
                                        </div>
                                        <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-36">
                                            <GooglePlay className="ml-3" />
                                            <p className="text-xs text-white ">
                                                دریافت از google play
                                            </p>
                                        </div>
                                        <div className="border border-white p-2 flex mt-3 items-center lg:w-48 w-36">
                                            <GooglePlay className="ml-3" />
                                            <p className="text-xs text-white ">
                                                دریافت از google play
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:mr-10 mr-3">
                                        <p className="text-white text-xs">نسخه ی IOS</p>
                                        <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-36">
                                            <AppleStore className="ml-3" />
                                            <p className="text-xs text-white ">
                                                دریافت از google play
                                            </p>
                                        </div>
                                        <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-36">
                                            <AppleStore className="ml-3" />
                                            <p className="text-xs text-white ">
                                                دریافت از google play
                                            </p>
                                        </div>
                                        <div className="border border-white p-2 flex items-center mt-3 lg:w-48 w-36">
                                            <AppleStore className="ml-3" />
                                            <p className="text-xs text-white ">
                                                دریافت از google play
                                            </p>
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
        </div>
    );
}
