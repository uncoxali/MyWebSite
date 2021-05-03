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

export default function index() {
    const [page, setPage] = useState<string>('p');

    const handleClick = () => {
        let a = page;
        if (a == 'p') {
            a = 'p1';
        } else a = 'p';

        setPage(a);
    };

    const Style = {
        backgroundColor: '#EFF8F7',
    };

    const items = data.service;

    return (
        <>
            <div style={Style} className="p-32 flex justify-center mt-8">
                <div className={`h-96 w-1/2 mt-28 ${page == 'p' ? 'block' : 'hidden'}`}>
                    <p className="text-indigo-400 text-4xl">تغییر کن تا آیندرو حس کنی </p>
                    <p className="mt-8">{data.titlePageOne}</p>
                    <div className="mt-10 flex justify-between">
                        <div>
                            <button className="text-white bg-green-550 rounded-full p-2 w-40">
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
                <div className={`h-96 w-1/2 mt-28 ${page == 'p1' ? 'block' : 'hidden'}`}>
                    <p className="text-indigo-400 text-4xl">تغییر کن تا آیندرو حس کنی </p>
                    <p className="mt-8">{data.titlePageTwo}</p>
                    <div className="mt-10 flex justify-between">
                        <div>
                            <button className="text-white bg-green-550 rounded-full p-2 w-40">
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
                <div className="h-96 w-1/2">
                    <video className="w-64 mr-52" src="/video/video.mp4" controls />
                    {/* <img className="w-64 mr-60" src="/images/screen.png" alt="" /> */}
                </div>
            </div>
            <div style={{ backgroundColor: '#F2F5F9' }} className="h-auto">
                <div className="-mt-9">
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

                <div className="mt-28 p-10">
                    <div className="flex px-16 justify-around">
                        <div className="w-1/2 mt-24">
                            <p className="text-xl">سادگی خرید فقط با 3 حرکت</p>
                            <p className="mt-10">{data.titlePageThree}</p>
                            <p className="opacity-70 mt-10">اطلاعات بیشتر</p>
                        </div>
                        <div className="-mt-14">
                            <PageCard className="w-72" />
                        </div>
                    </div>
                </div>

                <div className="px-28">
                    <div className="flex justify-center">
                        <p className="text-sm opacity-70">مهمترین مزایا</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-xl">سرویس های شاپیفای</p>
                    </div>
                    <div className="flex justify-between mt-16 px-32">
                        <div className="bg-white w-72 h-72  rounded-lg">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                            </div>
                            <div className="flex justify-center mt-10">
                                <div className="px-5">
                                    <div className="flex justify-center">
                                        <p className="text-lg">{items[0].title}</p>
                                    </div>
                                    <p className="text-xs mt-5">{items[0].decription}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-72 h-72  rounded-lg">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                            </div>
                            <div className="flex justify-center mt-10">
                                <div className="px-5">
                                    <div className="flex justify-center">
                                        <p className="text-lg">{items[1].title}</p>
                                    </div>
                                    <p className="text-xs mt-5">{items[1].decription}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-72 h-72  rounded-lg">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-blue-300 mt-10"></div>
                            </div>
                            <div className="flex justify-center mt-10">
                                <div className="px-5">
                                    <div className="flex justify-center">
                                        <p className="text-lg">{items[2].title}</p>
                                    </div>
                                    <p className="text-xs mt-5">{items[2].decription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32">
                    <div className="flex justify-center">
                        <p className="text-sm opacity-70">چرا بی استفاده</p>
                    </div>
                    <div className="flex justify-center">
                        <p>سرویس هاس شاپیفای</p>
                    </div>
                    <div className="flex justify-center">
                        <Service className="mt-2" />
                        <div className="flex absolute mt-36">
                            <User1 />
                            <User1 />
                        </div>
                    </div>
                    <div className=" px-32 mt-16">
                        <div className="flex justify-between">
                            <div className="w-1/2 px-20">
                                <div className="flex justify-center">
                                    <p className="text-lg font-bold text-green-550">
                                        فروش با استفاده از لینستو
                                    </p>
                                </div>
                                <p className="mt-6 text-sm">{data.titlePageFour}</p>
                                <div className="mt-16 flex justify-center">
                                    <Tik />
                                </div>
                            </div>
                            <div className="w-1/2 px-20">
                                <div className="flex justify-center">
                                    <p className="text-lg font-bold text-green-550">
                                        فروش با استفاده از لینستو
                                    </p>
                                </div>
                                <p className="mt-6 text-sm">{data.titlePageFour}</p>
                                <div className="mt-16 flex justify-center">
                                    <Close />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen ">
                    <div className="flex mt-28 px-32">
                        <div className=" h-72 w-1/2 mt-10">
                            <p className="text-lg">سادگی خرید فقط با 3 حرکت</p>
                            <p className="mt-3 text-sm opacity-80">{data.titlePageFive}</p>
                            <div className="mt-28">
                                <div className="flex">
                                    <Tik1 className="w-7" />
                                    <p className="mt-2 text-xs opacity-80 mr-3">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                                <div className="flex mt-3">
                                    <Tik1 className="w-7" />

                                    <p className="mt-2 text-xs opacity-80 mr-3">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                                <div className="flex mt-3">
                                    <Tik1 className="w-7" />

                                    <p className="mt-2 text-xs opacity-80 mr-3">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                                <div className="flex mt-3">
                                    <Tik1 className="w-7" />

                                    <p className="mt-2 text-xs opacity-80 mr-3">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                                <div className="flex mt-3">
                                    <Tik1 className="w-7" />
                                    <p className="mt-2 text-xs opacity-80 mr-3">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                                <div className="mt-28">
                                    <button className="text-white bg-green-550 rounded-full p-2 w-40">
                                        دانلود شاپیفای
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex justify-center">
                                <div className="rounded-r-3xl w-20 h-40 bg-blue-400 flex items-center justify-center">
                                    <Cart1 className="w-14" />
                                </div>
                                <div className="rounded-l-3xl bg-white w-96 h-40">
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
                                <div className="rounded-r-3xl bg-white w-96 h-40">
                                    <div className="flex justify-center">
                                        <p className="mt-3 text-sm">سادگی و سهولت خرید</p>
                                    </div>
                                    <div className="p-5">
                                        <p className=" text-xs text-center opacity-80">
                                            {data.cartText}
                                        </p>
                                    </div>
                                </div>
                                <div className="rounded-l-3xl w-20 h-40 bg-green-400 flex items-center justify-center">
                                    <Cart3 className="w-14" />
                                </div>
                            </div>
                            <div className=" flex justify-center -mt-5">
                                <Line2 />
                            </div>
                            <div className="flex justify-center">
                                <div className="rounded-r-3xl w-20 h-40 bg-blue-400 flex items-center justify-center">
                                    <Cart4 className="w-14" />
                                </div>
                                <div className="rounded-l-3xl bg-white w-96 h-40">
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
                <div className="mt-36 px-48 ">
                    <div style={{ backgroundColor: '#20AFFF' }} className=" flex rounded-3xl">
                        <div className="h-80 w-1/2 blue-500">
                            <div className="flex absolute">
                                <Footer_User className="-mt-16" />
                            </div>
                        </div>
                        <div className="w-1/2  h-80">
                            <div>
                                <p className="text-lg text-white mt-3"> همین حالا دانلود کنید</p>
                                <p className="text-white text-xs mt-3">
                                    !!اپلیکیشن شاپیفای را میتونید از بستر های زیر دانلود کنید
                                </p>
                            </div>
                            <div className="flex mt-6">
                                <div>
                                    <p className="text-white text-xs">نسخه ی اندروید</p>
                                    <div className="border border-white p-2 flex mt-3 items-center w-48">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex mt-3 items-center w-48">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex mt-3 items-center w-48">
                                        <GooglePlay className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                </div>
                                <div className="mr-10">
                                    <p className="text-white text-xs">نسخه ی IOS</p>
                                    <div className="border border-white p-2 flex items-center mt-3 w-48">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex items-center mt-3 w-48">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                    <div className="border border-white p-2 flex items-center mt-3 w-48">
                                        <AppleStore className="ml-3" />
                                        <p className="text-xs text-white ">دریافت از google play</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 px-48">
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
                    <div className="mt-7 flex justify-center">
                        <p className="text-sm">
                            © تمامی حقوق مادی و معنوی این سایت متعلق شاپیفای می باشد.
                        </p>
                    </div>
                </div>
                <div className="h-10"></div>
            </div>
        </>
    );
}