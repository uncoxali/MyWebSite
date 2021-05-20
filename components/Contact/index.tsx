import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import { useForm, SubmitHandler } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

interface IFormInputs {
    number: number;
    email: string;
    description: string;
    textarea: string;
    upload: any;
}

export default function index() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

    const { t, lang } = useTranslation();

    const isRTL = lang === 'fa' || lang === 'he';

    const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

    return (
        <div className="bg-green-10" dir={isRTL ? 'rtl' : 'ltr'}>
            <Navbar />
            <div className="h-scree w-full lg:px-40 md:px-36 px-5">
                <div className="">
                    <p className="mt-36 font-bold" style={{ color: '#4c5364' }}>
                        {t('contact:title')}
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-10">
                        <p>{t('contact:lable')}</p>
                        <input
                            {...register('email', { required: true })}
                            type="text"
                            placeholder={
                                isRTL
                                    ? 'ایمیل یا شماره خود را وارد کنید'
                                    : 'Enter your email or number'
                            }
                            className={` ${
                                errors.email && 'border border-red-500 placeholder-red-500'
                            }  mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200"`}
                        />
                    </div>
                    <div className="mt-10">
                        <p>{t('contact:lable1')}</p>
                        <input
                            {...register('description', { required: true })}
                            type="text"
                            placeholder={
                                isRTL
                                    ? 'توضیحات سفارش رو اینجا بنویسید'
                                    : 'Write the order description here'
                            }
                            className={` ${
                                errors.description && 'border border-red-500 placeholder-red-500'
                            }  mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200"`}
                        />
                    </div>
                    <div className="mt-10">
                        <p>{t('contact:lable2')}</p>
                        <textarea
                            {...register('textarea', { required: true })}
                            placeholder={
                                isRTL
                                    ? 'توضیحات سفارش رو اینجا بنویسید'
                                    : 'Write the order description here'
                            }
                            className={` ${
                                errors.textarea && 'border border-red-500 placeholder-red-500'
                            } h-52  mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200`}
                        />
                    </div>
                    <div className="mt-7 relative">
                        <p>{t('contact:file')}</p>
                        <div className="bg-white h-14 px-5 lg:w-64 md:w-64 w-full mt-3 ">
                            <label htmlFor="upload-photo" className="absolute cursor-pointer mt-3">
                                {t('contact:file')}
                            </label>

                            <input
                                {...register('upload', { required: true })}
                                className={` opacity-0 z-10`}
                                type="file"
                                name="photo"
                                id="upload-photo"
                            />
                        </div>
                        {errors.upload && (
                            <p className="text-red-400">
                                {isRTL ? 'فایل مورد نظر خود را آپلود کنید' : 'upload file'}
                            </p>
                        )}
                    </div>
                    <div className="mt-5 ">
                        <button
                            type="submit"
                            className="text-white font-bold p-3 lg:w-64 md:w-64 w-full"
                            style={{ backgroundColor: '#20AFFF' }}
                        >
                            {isRTL ? 'ثبت' : 'send'}
                        </button>
                    </div>
                </form>
            </div>
            <div className=" bottom-0 w-full h-auto">
                <Footer />
            </div>
        </div>
    );
}
