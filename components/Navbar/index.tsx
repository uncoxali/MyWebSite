import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ActiveLink from './activLink';
import cn from 'classnames';

import Logo from '@assets/svg/shopify/logo.svg';
import LogoShop from '@assets/svg/shopify/logoshop.svg';
import Menu from '@assets/svg/shopify/menu.svg';
import Close from '@assets/svg/shopify/close-btn.svg';
import Instagram from '@assets/svg/icons/instagram.svg';
import Youtube from '@assets/svg/icons/youtube.svg';
import Twitter from '@assets/svg/icons/twitter.svg';
import WhatsApp from '@assets/svg/icons/whatsapp.svg';
import Linkedin from '@assets/svg/icons/linkedin.svg';
import useTranslation from 'next-translate/useTranslation';

export default function index() {
    const router = useRouter();
    const [screen, setScreen] = useState<number>(0);
    const [menu, setMenu] = useState<boolean>(false);
    const [drop, setDrop] = useState<any>('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            setScreen(scrolled);
        });
    }, []);

    const handleClick = (e: any) => {
        router.push({
            pathname: '/',
            query: { id: 1 },
        });
        setMenu(false);
    };
    const { locale } = router;
    const changeLanguage = () => {
        if (locale === 'en') setDrop('ar');
        if (locale === 'ar') setDrop('en');
    };

    const { t, lang } = useTranslation();
    const isRTL = lang === 'ar' || lang === 'en';

    return (
        <div className="relative w-full max-w-8xl mx-auto  flex flex-col">
            <div className={` relative lg:block md:block hidden`}>
                <div
                    className={` lg:px-20 md:px-14 p-5 fixed w-full top-0 z-10  ${
                        screen > 50 ? 'shadow-xl bg-green-10' : 'bg-transparent'
                    }`}
                >
                    <div className="flex justify-between">
                        <div className="flex">
                            <div>
                                <div onClick={changeLanguage}>
                                    <Link href="/" locale="en">
                                        <p>{t('EN')}</p>
                                    </Link>
                                </div>

                                <div onClick={changeLanguage}>
                                    <Link href="/" locale="ar">
                                        <p>{t('FA')}</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex cursor-pointer">
                                <Logo />
                                <p className="font-bold text-green-550 mr-3 mt-3">
                                    <ActiveLink href="/">
                                        <p>{t('home:logo')}</p>
                                    </ActiveLink>
                                </p>
                            </div>
                            <div className="flex mt-4 text-sm list">
                                <div className={`  lg:mr-12 md:mr-5 cursor-pointer active`}>
                                    <ActiveLink href="/question">
                                        <p>سوالات متداول</p>
                                    </ActiveLink>
                                </div>

                                <div className={`  lg:mr-12 md:mr-5 cursor-pointer active`}>
                                    <ActiveLink href="/tariffs">
                                        <p> تعرفه ها</p>
                                    </ActiveLink>
                                </div>

                                <div className={`  lg:mr-12 md:mr-5 cursor-pointer active`}>
                                    <ActiveLink href="/contact">
                                        <p> تماس با ما</p>
                                    </ActiveLink>
                                </div>
                                <div className={`   lg:mr-12 md:mr-5 cursor-pointer active`}>
                                    <ActiveLink href="/about">
                                        <p> درباره ما</p>
                                    </ActiveLink>
                                </div>
                            </div>
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
                <div
                    className={` ${
                        screen > 50 ? 'shadow-xl bg-green-10' : 'bg-transparent'
                    } w-full h-20 top-0 fixed z-10`}
                >
                    <div className="flex justify-center">
                        <div>
                            <div onClick={changeLanguage}>
                                <Link href="/" locale="en">
                                    <p>{t('EN')}</p>
                                </Link>
                            </div>

                            <div onClick={changeLanguage}>
                                <Link href="/" locale="ar">
                                    <p>{t('FA')}</p>
                                </Link>
                            </div>
                        </div>
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
                                    <ActiveLink href="/">
                                        <a>خانه</a>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/question">
                                        <a>سوالات متداول</a>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/tariffs">
                                        <a> تعرفه ها</a>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/contact">
                                        <a> تماس با ما</a>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/about">
                                        <a> درباره ما</a>
                                    </ActiveLink>
                                    {/* <Link href="/about"></Link> */}
                                </li>
                            </ul>
                            <div>
                                <button
                                    className="text-white bg-green-550 p-2 w-full mt-5 "
                                    onClick={(e) => handleClick(e)}
                                >
                                    دانلود شاپیفای
                                </button>
                            </div>
                            <div className="flex mt-10 justify-center">
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
