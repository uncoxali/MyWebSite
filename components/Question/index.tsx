import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import Plus from '@assets/svg/icons/plus.svg';
import useTranslation from 'next-translate/useTranslation';

export default function index() {
    const [drop, setDrop] = React.useState<boolean>(false);
    const [drop1, setDrop1] = React.useState<boolean>(false);
    const [drop2, setDrop2] = React.useState<boolean>(false);
    const [drop3, setDrop3] = React.useState<boolean>(false);

    const handleClick = (a: any) => {
        if (a == 1) {
            setDrop(!drop);
            setDrop1(false);
            setDrop2(false);
            setDrop3(false);
        } else if (a == 2) {
            setDrop1(!drop1);
            setDrop(false);
            setDrop2(false);
            setDrop3(false);
        } else if (a == 3) {
            setDrop2(!drop2);
            setDrop1(false);
            setDrop(false);
            setDrop3(false);
        } else if (a == 4) {
            setDrop3(!drop3);
            setDrop1(false);
            setDrop2(false);
            setDrop(false);
        }
    };

    const { t, lang } = useTranslation();

    const isRTL = lang === 'fa' || lang === 'he';

    const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

    return (
        <div className="bg-green-10" dir={isRTL ? 'rtl' : 'ltr'}>
            <Navbar logo={t('question:logo')} />
            <div className=" mt-20 w-full lg:px-36 md:px-28 px-10">
                <div className="">
                    <div className="mt-32 ">
                        <p className="text-2xl font-bold" style={{ color: '#4C5364' }}>
                            {t('question:title')}
                        </p>
                    </div>
                    <div>
                        <div
                            className="flex justify-between mt-14  cursor-pointer"
                            onClick={() => handleClick('1')}
                        >
                            <p className={`${drop && true ? 'text-blue-500' : ''} mt-3`}>
                                {t('question:question1')}
                            </p>
                            <p className="cursor-pointer text-4xl">
                                {drop && true ? '_' : <Plus className="w-7 opacity-50" />}
                            </p>
                        </div>
                        <div className={`${drop && true ? 'block' : 'hidden'} mt-3`}>
                            <p>{t('question:p')}</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="flex justify-between mt-2  cursor-pointer"
                            onClick={() => handleClick('2')}
                        >
                            <p className={`${drop1 && true ? 'text-blue-500' : ''} mt-3`}>
                                {t('question:question2')}
                            </p>
                            <p className="cursor-pointer text-4xl">
                                {drop1 && true ? '_' : <Plus className="w-7 opacity-50" />}
                            </p>
                        </div>
                        <div className={`${drop1 && true ? 'block' : 'hidden'} mt-3`}>
                            <p>{t('question:p')}</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="flex justify-between mt-2  cursor-pointer"
                            onClick={() => handleClick('3')}
                        >
                            <p className={`${drop2 && true ? 'text-blue-500' : ''} mt-3`}>
                                {t('question:question3')}
                            </p>
                            <p className="cursor-pointer text-4xl">
                                {drop2 && true ? '_' : <Plus className="w-7 opacity-50" />}
                            </p>
                        </div>
                        <div className={`${drop2 && true ? 'block' : 'hidden'} mt-3`}>
                            <p>{t('question:p')}</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="flex justify-between mt-2 cursor-pointer"
                            onClick={() => handleClick('4')}
                        >
                            <p className={`${drop3 && true ? 'text-blue-500' : ''} mt-3`}>
                                {t('question:question4')}
                            </p>
                            <p className="cursor-pointer text-4xl">
                                {drop3 && true ? '_' : <Plus className="w-7 opacity-50" />}
                            </p>
                        </div>
                        <div className={`${drop3 && true ? 'block' : 'hidden'} mt-3`}>
                            <p>{t('question:p')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bottom-0 w-full h-auto">
                <Footer />
            </div>
        </div>
    );
}
