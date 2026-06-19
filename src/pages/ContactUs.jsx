import Contact from "../components/Cantact"
import { contact } from "../constants/contact"

export default function ContactUs() {
    return (
        <>
            <div className="w-full p-20 mt-10 bg-linear-to-b from-blue-400 to-blue-900">
                <span className="text-white text-sm flex justify-center items-center "> تماس با ما </span>

                <h2 className="text-center text-white text-4xl mt-4">  چطور می‌تونیم کمکتون کنیم؟
                </h2>

                <p className="text-center mt-5 text-gray-300">تیم ما آماده‌ست تا هر سوال یا درخواستی دارید پاسخ بده</p>
            </div>

            <div className="flex items-center container flex-wrap pb-20 mx-auto">
                <div className="flex-col flex-start mx-auto flex justify-center  items-center pt-10 ">




                    <div className="flex flex-col gap-4 ">

                        {
                            contact.map(item => {
                                return (
                                    <Contact item={item} />
                                )
                            })
                        }

                    </div>




                    <div className="p-2 border border-gray-200  rounded-3xl mt-5">
                        <div className="flex flex-start w-50 pb-5  ">
                            <span className="text-sm text-gray-600">شبکه‌های اجتماعی</span>
                        </div>
                        <div className="flex  gap-10">
                            <div className="cursor-pointer">
                                <img className="size-5 " src="/icons/icons8-instagram-logo.gif" alt="" />
                                <h1 className="text-sm"> اینستاگرام</h1>
                            </div>
                            <div  className="cursor-pointer">
                                <img className="size-5" src="/icons/icons8-whatsapp-logo.gif" alt="" />
                                <h1 className="text-sm"> واتساپ</h1>
                            </div>
                            <div  className="cursor-pointer">
                                <img className="size-5" src="/icons/icons8-telegram-48.png" alt="" />
                                <h1 className="text-sm">تلگرام</h1>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="bg-white p-2 rounded-2xl border mx-auto  border-gray-200  w-[400px] mt-15 ">

                    <h2 className="text-lg font-bold text-[#0b2545] mb-6">فرم تماس</h2>

                    <div className="flex flex-col gap-4 ">


                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-[#0b2545]">نام و نام‌خانوادگی</label>
                            <input
                                type="text"
                                placeholder="مثلاً: علی رضایی"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>


                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-[#0b2545]">شماره تماس</label>
                            <input
                                type="tel"
                                placeholder="۰۹۱۲XXXXXXX"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>


                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-[#0b2545]">پیام</label>
                            <textarea
                                rows={4}
                                placeholder="سوال یا درخواست خود را بنویسید..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            />
                        </div>


                        <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm transition-all">
                            ارسال پیام
                        </button>

                    </div>
                </div>




            </div>
        </>
    )
}