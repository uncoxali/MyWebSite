import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

export default function index() {
    return (
        <div className="bg-green-10">
            <Navbar />
            <div className="h-scree w-full lg:px-40 md:px-36 px-5">
                <div className="">
                    <p className="mt-36 font-bold" style={{ color: '#4c5364' }}>
                        برای ارتباط با لینستو از فر زیر استفاده کنید
                    </p>
                </div>
                <div className="mt-10">
                    <p>موضوع</p>
                    <input
                        type="text"
                        placeholder="توضیحات سفارش رو اینجا بنویسید"
                        className="placeholder-black mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200 ..."
                    />
                </div>
                <div className="mt-20">
                    <p>توضیحات</p>
                    <textarea
                        placeholder="توضیحات سفارش رو اینجا بنویسید"
                        className="h-52 placeholder-black mt-2 p-5 lg:w-2/3 md:w-full w-full focus:outline-none focus:ring focus:border-blue-200 ..."
                    />
                </div>
                <div className="mt-10 relative">
                    <p>ضمیمه ی فایل</p>
                    <div className="bg-white h-14 px-5 lg:w-64 md:w-64 w-full mt-3 ">
                        <label htmlFor="upload-photo" className="absolute cursor-pointer mt-3">
                            فایل را آپلود کنید
                        </label>

                        <input
                            className="opacity-0 z-10"
                            type="file"
                            name="photo"
                            id="upload-photo"
                        />
                    </div>
                </div>
                <div className="mt-5 ">
                    <button
                        className="text-white font-bold p-3 lg:w-64 md:w-64 w-full"
                        style={{ backgroundColor: '#20AFFF' }}
                    >
                        ثبت
                    </button>
                </div>
            </div>
            <div className=" bottom-0 w-full h-auto">
                <Footer />
            </div>
        </div>
    );
}
