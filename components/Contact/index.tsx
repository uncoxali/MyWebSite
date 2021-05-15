import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import { useForm, SubmitHandler } from 'react-hook-form';

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

    return (
        <div className="bg-green-10">
            <Navbar />
            <div className="h-scree w-full lg:px-40 md:px-36 px-5">
                <div className="">
                    <p className="mt-36 font-bold" style={{ color: '#4c5364' }}>
                        برای ارتباط با لینستو از فر زیر استفاده کنید
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-10">
                        <p>شماره </p>
                        <input
                            {...register('number', { required: true })}
                            type="number"
                            placeholder="شماره موبایل خود را وارد کنید"
                            className={` ${
                                errors.number && 'border border-red-500 placeholder-red-500'
                            } "placeholder-black mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200"`}
                        />
                    </div>
                    <div className="mt-10">
                        <p>ایمیل</p>
                        <input
                            {...register('email', { required: true })}
                            type="text"
                            placeholder="ایمیل خود را وارد کنید"
                            className={` ${
                                errors.email && 'border border-red-500 placeholder-red-500'
                            } "placeholder-black mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200"`}
                        />
                    </div>
                    <div className="mt-10">
                        <p>موضوع</p>
                        <input
                            {...register('description', { required: true })}
                            type="text"
                            placeholder="توضیحات سفارش رو اینجا بنویسید"
                            className={` ${
                                errors.description && 'border border-red-500 placeholder-red-500'
                            } "placeholder-black mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200"`}
                        />
                    </div>
                    <div className="mt-10">
                        <p>توضیحات</p>
                        <textarea
                            {...register('textarea', { required: true })}
                            placeholder="توضیحات سفارش رو اینجا بنویسید"
                            className={` ${
                                errors.textarea && 'border border-red-500 placeholder-red-500'
                            } h-52 placeholder-black mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200`}
                        />
                    </div>
                    <div className="mt-7 relative">
                        <p>ضمیمه ی فایل</p>
                        <div className="bg-white h-14 px-5 lg:w-64 md:w-64 w-full mt-3 ">
                            <label htmlFor="upload-photo" className="absolute cursor-pointer mt-3">
                                فایل را آپلود کنید
                            </label>

                            <input
                                {...register('upload', { required: true })}
                                className={` opacity-0 z-10`}
                                type="file"
                                name="photo"
                                id="upload-photo"
                            />
                            {errors.upload && (
                                <p className="text-red-400">فایل مورد نظر خود را آپلود کنید</p>
                            )}
                        </div>
                    </div>
                    <div className="mt-5 ">
                        <button
                            type="submit"
                            className="text-white font-bold p-3 lg:w-64 md:w-64 w-full"
                            style={{ backgroundColor: '#20AFFF' }}
                        >
                            ثبت
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
