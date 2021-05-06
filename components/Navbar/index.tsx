import React, { useEffect, useState } from 'react';

import Logo from '@assets/svg/shopify/logo.svg';
import LogoShop from '@assets/svg/shopify/logoshop.svg';
import Menu from '@assets/svg/shopify/menu.svg';
import Close from '@assets/svg/shopify/close-btn.svg';
import Style from './style.module.css';

export default function index() {
    const [screen, setScreen] = useState<any>();
    const [menu, setMenu] = useState<boolean>(false);

    useEffect(() => {});
    return (
        <div className="relative w-full max-w-8xl mx-auto  flex flex-col">
            <div className={` relative lg:block md:block hidden`}>
                <div className={` bg-green-20 lg:px-20 p-5 fixed w-full top-0 z-10 `}>
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="flex">
                                <Logo />
                                <p className="font-bold text-green-550 mr-3 mt-3">شاپیفای</p>
                            </div>
                            <ul className="flex mt-4 ">
                                <li className="mr-12">سوالات متداول</li>
                                <li className="mr-12">تعرفه ها</li>
                                <li className="mr-12">تماس با ما </li>
                                <li className="mr-12">درباره ما</li>
                            </ul>
                        </div>
                        <div className="flex mt-3 left-5">
                            <div>
                                <h5 className="font-bold text-green-550 mr-6">۳،۰۰۰</h5>
                            </div>
                            <div>
                                <button className="p-2 bg-green-550 text-white text-sm w-32 rounded-3xl -mt-3 mr-6">
                                    ساخت لینک
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden md:hidden block">
                <div className="w-full h-20 bg-green-20 top-0 fixed">
                    <div className="flex justify-center">
                        <LogoShop className="mt-3" />
                        <p className="font-bold text-green-550 mr-3 mt-5 text-lg">شاپیفای</p>
                    </div>
                    <div className="-mt-6 px-5 flex">
                        <Menu className="cursor-pointer" onClick={() => setMenu(true)} />
                    </div>
                </div>
            </div>
            {menu == true && (
                <div className="lg:hidden md:hidden block top-0 absolute z-10 w-full">
                    <div className="w-full h-screen bg-white fixed">
                        <div className="flex justify-end ml-5">
                            <button className="text-3xl mt-10 ml-5" onClick={() => setMenu(false)}>
                                <Close />
                            </button>
                        </div>
                        <div className="p-7">
                            <ul>
                                <li className="mt-5">خانه</li>
                                <li className="mt-5">سوالات متداول</li>
                                <li className="mt-5">تعرفه ها</li>
                                <li className="mt-5">تماس با ما</li>
                                <li className="mt-5">درباره ما</li>
                            </ul>
                            <div>
                                <button className="text-white bg-green-550 p-2 w-full mt-5 ">
                                    دانلود شاپیفای
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
