import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white pt-12 pb-6 ">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">

                  
                    <div>
                        <h3 className="text-xl font-bold text-green-400 mb-4">فروشگاه ما</h3>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            بهترین محصولات را با بهترین کیفیت و سریع‌ترین ارسال برای شما فراهم کرده‌ایم. رضایت شما هدف ماست.
                        </p>
                    </div>

                   
                    <div>
                        <h3 className="text-xl font-bold text-green-400 mb-4">لینک‌های سریع</h3>
                        <ul className="space-y-2">
                           <Link to={'/'}> <li><a href="#" className="text-blue-200 hover:text-white transition"> خانه </a></li></Link>
                           <Link to={'/cart'}> <li><a href="#" className="text-blue-200 hover:text-white transition">سبد خرید</a></li></Link>
                           <Link to={'/contact-us'}> <li><a href="#" className="text-blue-200 hover:text-white transition">تماس با ما</a></li></Link>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-xl font-bold text-green-400 mb-4">ارتباط با ما</h3>
                        <p className="text-blue-200 text-sm">تلفن: ۰۲۱-XXXX-XXXX-</p>
                        <p className="text-blue-200 text-sm mt-2">ایمیل: info@tavani.ir</p>
                    </div>
                </div>

             
                <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-400 text-xs">
                 developed by Sogand Mohebi
                </div>
            </div>
        </footer>
    )
}