import Value from "../components/Value"
import { team } from "../constants/team"
import { value } from "../constants/value"

export default function AboutUs() {
    return (
        <div className="flex-col mx-auto flex justify-center  items-center pt-10 ">
            <div className="w-full  h-[300px] bg-linear-to-b from-blue-400 to-blue-900">   <span className="text-white text-sm flex justify-center items-center pt-10">درباره ما </span>

                <h2 className="text-center text-white text-4xl mt-4">ما تجهیزات پزشکی <span className="text-green-400">باکیفیت  </span>
                    می‌آوریم </h2>

                <p className="text-center mt-5 text-gray-300">از سال ۱۳۹۳ با هدف تأمین تجهیزات پزشکی استاندارد برای مراکز درمانی کشور  <br />فعالیت می‌کنیم</p>
            </div>
            <div className="flex flex-row gap-8 container mx-auto justify-center items-center text-center pt-5">
                <div className="flex flex-col gap-4 ">
                    <span className="text-2xl text-green-400">۱۰+</span>
                    <span className="text-gray-400"> سال تجربه </span>
                </div>
                <div className="flex flex-col ">
                    <span className="text-2xl text-green-400">+۱۲۰</span>
                    <span className="text-gray-400"> مرکز درمانی مشتری </span>
                </div>
                <div className="flex flex-col ">
                    <span className="text-2xl text-green-400">+۵۰۰</span>
                    <span className="text-gray-400"> محصول موجود </span>
                </div>

                <div className="flex flex-col ">
                    <span className="text-2xl text-green-400">۴۸ ساعت</span>
                    <span className="text-gray-400"> ارسال </span>
                </div>
            </div>



            <div className="container items-center justify-center mt-10 border border-gray-200 shadow-2xl p-5 rounded-2xl ">
                <h2 className="text-sm text-blue-500 ">داستان ما</h2>
                <h1 className="text-xl font-bold">چرا توانی تأسیس شد؟</h1>
                <p>توانی در سال ۱۳۹۳ با یک هدف ساده اما مهم تأسیس شد: کمک به مراکز درمانی ایران برای دسترسی آسان‌تر به تجهیزات پزشکی باکیفیت <br /> و قابل اعتماد. <br />

                    امروز با بیش از ۵۰۰ محصول و خدمت به بیش از ۱۲۰ مرکز درمانی در سراسر کشور، همچنان به همان هدف اولیه وفاداریم.</p>
            </div>
              <h2 className=" pt-10 font-bold text-2xl">ارزش‌های ما</h2>
            <div className="gap-5  pt-20 pb-10 container mx-auto flex overflow-hidden flex-wrap items-center justify-center ">
                 <span></span>
                {
                    value.map(item => {
                        return (
                            <Value item={item} />
                        )
                    })
                }

            </div>


               <h2 className=" pt-10 font-bold text-2xl">تیم ما </h2>
             <div className="gap-5  pt-20 pb-10 container mx-auto flex overflow-hidden flex-wrap items-center justify-center ">
                 <span></span>
                {
                    team.map(item => {
                        return (
                            <Value item={item} />
                        )
                    })
                }

            </div>

        </div>
    )
}