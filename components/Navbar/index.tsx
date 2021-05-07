import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '@assets/svg/shopify/logo.svg';
import LogoShop from '@assets/svg/shopify/logoshop.svg';
import Menu from '@assets/svg/shopify/menu.svg';
import Close from '@assets/svg/shopify/close-btn.svg';
import Style from './style.module.css';

export default function index() {
    const [screen, setScreen] = useState<number>(0);
    const [menu, setMenu] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            setScreen(scrolled);
        });
    });

    // var header = document.getElementById("myDIV");
    // var btns = header.getElementsByClassName("btn");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function() {
    //   var current = document.getElementsByClassName("active");
    //   current[0].className = current[0].className.replace(" active", "");
    //   this.className += " active";
    //   });
    // }

    useEffect(() => {
        let list = document.querySelector('.list');
        let active = list?.querySelector('.active');
        console.log(active);
    });
    return (
        <div className="relative w-full max-w-8xl mx-auto  flex flex-col">
            <div className={` relative lg:block md:block hidden`}>
                <div
                    className={` lg:px-20 p-5 fixed w-full top-0 z-10 ${
                        screen > 50 ? 'shadow-xl bg-green-10' : 'bg-transparent'
                    } `}
                >
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="flex cursor-pointer">
                                <Logo />
                                <p className="font-bold text-green-550 mr-3 mt-3">
                                    <Link href="/">
                                        <a>شاپیفای</a>
                                    </Link>
                                </p>
                            </div>
                            <ul className="flex mt-4 text-sm list">
                                <li className={`  mr-12 cursor-pointer active`}>
                                    <Link href="/question">
                                        <a>سوالات متداول</a>
                                    </Link>
                                </li>

                                <li className={`  mr-12 cursor-pointer active`}>
                                    <Link href="/tariffs">
                                        <a> تعرفه ها</a>
                                    </Link>
                                </li>

                                <li className={`  mr-12 cursor-pointer active`}>
                                    <Link href="/contact">
                                        <a> تماس با ما</a>
                                    </Link>
                                </li>
                                <li className={`   mr-12 cursor-pointer active`}>
                                    <Link href="/about">
                                        <a> درباره ما</a>
                                    </Link>
                                </li>
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
                <div className="w-full h-20 bg-green-20 top-0 fixed z-10">
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
                                <li className="mt-5">
                                    <Link href="/">
                                        <a>خانه</a>
                                    </Link>
                                </li>
                                <li className="mt-5">
                                    <Link href="/question">
                                        <a>سوالات متداول</a>
                                    </Link>
                                </li>
                                <li className="mt-5">
                                    <Link href="/tariffs">
                                        <a> تعرفه ها</a>
                                    </Link>
                                </li>
                                <li className="mt-5">
                                    <Link href="/contact">
                                        <a> تماس با ما</a>
                                    </Link>
                                </li>
                                <li className="mt-5">
                                    <Link href="/about">
                                        <a> درباره ما</a>
                                    </Link>
                                </li>
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
