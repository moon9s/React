import { Link } from "react-router-dom";

import PrHome from "../components/PrHome";
import Products from "../components/Products";
import Trust from "../components/Trust";
import { prhome } from "../constants/prhome";
import { trust } from "../constants/trust";


export default function Home() {
    return (
      
         

            <div className="" >
                <Products />

                <section className="w-full  h-[700px] bg-linear-to-b from-blue-400 to-blue-900">
                    <div className="container flex-col mx-auto flex justify-center  items-center pt-10">
                        <span className=" border-white/20 bg-white/20 backdrop-blur-sm p-4 rounded-3xl shadow-2xl text-white" >تامیین کننده رسمی تجهیزات پزشکی <i className="bi bi-stars"></i></span>

                        <h2 className="text-center text-white text-4xl mt-4">تجهیزات پزشکی <span className="text-green-400">باکیفیت</span> <br />
                            برای مراکز درمانی</h2>

                        <p className="text-center mt-5 text-gray-300">انواع تجهیزات و ملزومات پزشکی با گارانتی معتبر, <br />ارسال سریع و پشتیبانی تخصصی</p>
                    </div>


                    <div className="container overflow-hidden flex-col  mx-auto flex justify-center  items-center p-10 ">
                        <span className="text-gray-300">برای مشاهده محصولات کلیک کنید <i class="bi bi-arrow-down"></i></span>

                        <Link to="/pr"> <button className="relative bg-green-400 mt-5 px-20  py-10 rounded-full text-white text-2xl cursor-pointer hover:scale-105 ease-in-out transition-all">مشاهده همه محصولات <i className="items-center justify-center bi bi-arrow-left"></i>
                            <span className="absolute inset-0 pointer-events-none rounded-full border-2 border-green-500 animate-ping opacity-75"></span>
                        </button></Link>

                    </div>

                    <div className="flex flex-row gap-8 container mx-auto justify-center items-center text-center">
                        <div className="flex flex-col gap-4 ">
                            <span className="text-4xl text-green-400">10سال</span>
                            <span className="text-gray-400">تجربه در بازار</span>
                        </div>
                        <div className="flex flex-col ">
                            <span className="text-4xl text-green-400">+۱۲۰</span>
                            <span className="text-gray-400"> مرکز درمانی مشتری </span>
                        </div>
                        <div className="flex flex-col ">
                            <span className="text-4xl text-green-400">+۵۰۰</span>
                            <span className="text-gray-400"> محصول موجود </span>
                        </div>
                    </div>

                </section>

                <section className=" bg-blue-100 ">
                    <div className="container mx-auto flex flex-col items-center justify-center gap-4 pt-10 pb-10 ">
                        <span className="text-blue-600">چرا توانی؟</span>
                        <h2 className="text-2xl font-bold ">مزایای خرید از ما</h2>
                        <p className="text-gray-500">با اطمینان کامل تجهیزات مورد نیاز مرکز درمانی خود را از ما تهیه کنید</p>
                    </div>
                    <div className="gap-5  pt-20 pb-10 container mx-auto flex overflow-hidden flex-wrap items-center justify-center">
                        {
                            trust.map(item => {
                                return (
                                    <Trust item={item} />
                                )
                            })
                        }

                    </div>
                </section>

                <section className=" bg-blue-100 ">
                    <div className="container mx-auto flex flex-col items-center justify-center gap-4 pt-10 pb-10 ">
                        <span className="text-blue-600">محصولات برگزیده </span>

                        <h2 className="text-2xl font-bold ">  پرفروش‌ترین تجهیزات </h2>
                        <p className="text-gray-500">نمونه‌ای از محصولات موجود در فروشگاه ما </p>
                    </div>
                    <div className="gap-5  pt-20 pb-10 container mx-auto flex overflow-hidden flex-wrap items-center justify-center">
                        {
                            prhome.map(item => {
                                return (

                                    <PrHome item={item} />
                                )
                            })
                        }

                    </div>
                </section>

                <section className=" bg-blue-100   p-10 overflow-hidden px-10 ">


                    <div className="container mx-auto  bg-linear-to-b w-full flex-start justify-center items-center  from-blue-400 to-blue-900 h-[250px] rounded-2xl  overflow-hidden">

                        <div className="pt-10 pr-10 ">
                            <span className="bg-green-200 opacity-50 mt-10 px-10 py-2 rounded-3xl "> پیشنهاد ویژه</span>
                            <h1 className="text-2xl mt-3 ">۱۵٪ تخفیف برای مراکز درمانی</h1>
                            <p className="text-gray-300 pt-3">با ثبت‌نام رایگان در سایت توانی، از تخفیف ویژه
                                و شرایط اقساطی استفاده کنید</p>

                            <div className="flex gap-5 pt-2 ">

                                <span className="flex gap-2">
                                     <i class="bi bi-telephone"></i>۰۲۱-XXXX-XXXX </span>
                                <span className="flex gap-2 "><i class="bi bi-envelope"></i>info@tavani.ir</span>

                            </div>



                        </div>

                    </div>


                </section>




            </div>

           
       
    )
}