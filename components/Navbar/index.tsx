import React, { FC, useEffect, useState } from 'react';
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

interface Props {
    logo?: string;
}

const Navbar: FC<Props> = ({ logo }) => {
    const router = useRouter();
    const [screen, setScreen] = useState<number>(0);
    const [menu, setMenu] = useState<boolean>(false);
    const [change, setChange] = useState<any>('');

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

    const { t, lang } = useTranslation();
    const isRTL = lang === 'fa' || lang === 'he';

    const handleChange = (e: any) => {
        let a = e.target.value;
        // router.push('/', '/', { locale: 'fa' });
        if (a === 'EN') router.push('/', '/', { locale: 'en' });
        if (a === 'FA') router.push('/', '/', { locale: 'fa' });
    };

    return (
        <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative w-full max-w-8xl mx-auto  flex flex-col"
        >
            <div className={` relative lg:block md:block hidden`}>
                <div
                    className={` lg:px-20 md:px-14 p-5 fixed w-full top-0 z-10 bg-green-10 ${
                        screen > 50 ? 'shadow-xl bg-green-10' : 'bg-transparent'
                    }`}
                >
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="flex cursor-pointer">
                                <Logo />
                                <p className="font-bold text-green-550 mr-3 mt-3">
                                    <ActiveLink href="/">
                                        <p>{lang === 'fa' ? 'شاپیفای' : 'shopify'}</p>
                                    </ActiveLink>
                                </p>
                            </div>
                            <div className="flex mt-4 text-sm list">
                                <div
                                    className={`lg:mr-12 md:mr-5 cursor-pointer ${
                                        isRTL ? 'mr-2' : 'ml-2'
                                    } `}
                                >
                                    <ActiveLink href="/question">
                                        <p>{lang === 'fa' ? 'سوالات متداول' : 'Question'}</p>
                                    </ActiveLink>
                                </div>

                                <div className={`lg:mr-12 md:mr-5 cursor-pointer `}>
                                    <ActiveLink href="/prising">
                                        <p>{lang === 'fa' ? ' تعرفه ها' : 'Pricing'}</p>
                                    </ActiveLink>
                                </div>

                                <div className={`lg:mr-12 md:mr-5 cursor-pointer active`}>
                                    <ActiveLink href="/contact">
                                        <p>{lang === 'fa' ? ' تماس با ما' : 'Contact Us'}</p>
                                    </ActiveLink>
                                </div>
                                <div className={`lg:mr-12 md:mr-5 cursor-pointer active`}>
                                    <ActiveLink href="/about">
                                        <p>{lang === 'fa' ? '  درباره ما' : 'About Us'}</p>
                                    </ActiveLink>
                                </div>
                                <div
                                    className={`${isRTL ? 'mr-10' : ''}`}
                                    onChange={(e: any) => handleChange(e)}
                                >
                                    <select className="appearance-none bg-transparent outline-none ">
                                        <option value="EN">EN</option>
                                        <option value="FA">FA</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-3 left-5">
                            {/* <div>
                                <h5 className="font-bold text-green-550 mr-6">
                                    {isRTL ? '۳،۰۰۰' : '3,000'}
                                </h5>
                            </div> */}
                            <div>
                                <button
                                    onClick={(e) => handleClick(e)}
                                    className="p-2 bg-green-550 text-white text-sm w-32 rounded-3xl -mt-3 mr-6"
                                >
                                    {isRTL ? 'ساخت لینک' : 'Create Link'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden md:hidden block">
                <div
                    className={` bg-green-10 ${
                        screen > 50 ? 'shadow-xl bg-green-10' : 'bg-transparent'
                    } w-full h-20 top-0 fixed z-10`}
                >
                    <div className="flex justify-between">
                        <div className="px-5 mt-6">
                            <Menu className="cursor-pointer" onClick={() => setMenu(true)} />
                        </div>
                        <div className="flex cursor-pointer">
                            <LogoShop className="mt-3" />
                            <p className="font-bold text-green-550 mr-3 mt-5 text-lg">
                                <Link href="/">
                                    <p>{lang === 'fa' ? 'شاپیفای' : 'shopify'}</p>
                                </Link>
                            </p>
                        </div>

                        <div
                            className={`${isRTL ? 'ml-10 mt-5' : 'mr-10 mt-5'}`}
                            onChange={(e: any) => handleChange(e)}
                        >
                            <select className="appearance-none bg-transparent outline-none font-bold opacity-75">
                                <option value="EN">EN</option>
                                <option value="FA">FA</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {menu == true && (
                <div className="lg:hidden md:hidden block top-0 absolute z-10 w-full">
                    <div className="w-full h-screen bg-white fixed">
                        <div className={`flex ${isRTL ? 'justify-end ml-5' : 'justify-end mr-10'}`}>
                            <button className="text-3xl mt-10 ml-5" onClick={() => setMenu(false)}>
                                <Close />
                            </button>
                        </div>
                        <div className="p-7">
                            <ul>
                                <li className="mt-5">
                                    <ActiveLink href="/">
                                        <p>{lang === 'fa' ? 'خانه' : 'Home'}</p>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/question">
                                        <p>{lang === 'fa' ? 'سوالات متداول' : 'Question'}</p>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/prising">
                                        <p>{lang === 'fa' ? ' تعرفه ها' : 'Pricing'}</p>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/contact">
                                        <p>{lang === 'fa' ? ' تماس با ما' : 'Contact Us'}</p>
                                    </ActiveLink>
                                </li>
                                <li className="mt-5">
                                    <ActiveLink href="/about">
                                        <p>{lang === 'fa' ? '  درباره ما' : 'About Us'}</p>
                                    </ActiveLink>
                                    {/* <Link href="/about"></Link> */}
                                </li>
                            </ul>
                            <div>
                                <button
                                    className="text-white bg-green-550 p-2 w-full mt-5 "
                                    onClick={(e) => handleClick(e)}
                                >
                                    {isRTL ? ' دانلود شاپیفای' : 'Download Shopify'}
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
};

export default Navbar;
