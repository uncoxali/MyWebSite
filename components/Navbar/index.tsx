import React from 'react';

import Logo from '@assets/svg/shopify/logo.svg';

export default function index() {
    return (
        <div className="relative">
            <div className="px-20 p-5 fixed bg-green-50 w-full top-0 z-10">
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
    );
}
