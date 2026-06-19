import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { decreaseQty, increaseQty, removeFromCart } from "../features/cart/cartSlice"

export default function Cart() {

    const cart = useSelector(state => state.cart?.items || [])
    const dispatch = useDispatch()

    if (cart.length < 1) {

        return (
            <>  
             <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
               
                <div className="text-6xl mb-6">🛒</div>

                <h2 className="text-3xl font-bold text-blue-900 mb-4">سبد خرید شما خالی است!</h2>
                <p className="text-gray-600 mb-8 max-w-sm">
                    به نظر می‌رسد هنوز محصولی را به سبد خرید اضافه نکرده‌اید. برای شروع خرید به صفحه اصلی برگردید.
                </p>

                <Link
                    to="/pr"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                    بازگشت به فروشگاه
                </Link>
            </div>
            </>
        )

    }



    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    return (
        <div>
           
            {cart.map(item => {
                return (
                    <><div key={item.id} className="flex flex-col items-center p-6 m-4 bg-white border-2 border-blue-200 rounded-2xl  ">


                        <img className="w-[300px] h-auto rounded-lg mb-4" src={item.img} alt={item.title} />


                        <h2 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-sm mb-3 text-center">{item.description}</p>
                        <span className="text-green-600 font-bold text-lg mb-4">{item.price.toLocaleString()} تومان</span>


                        <div className="flex items-center gap-4 bg-blue-50 px-4 py-2 rounded-full mb-4">
                            <button
                                onClick={() => dispatch(decreaseQty(item))}
                                className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                            >-</button>

                            <span className="font-bold text-blue-900">{item.qty}</span>

                            <button
                                onClick={() => dispatch(increaseQty(item))}
                                className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                            >+</button>
                        </div>


                        <button
                            onClick={() => dispatch(removeFromCart(item))}
                            className="text-red-500 hover:text-red-700 font-medium transition-colors"
                        >
                            حذف از سبد
                        </button>
                    </div>

                    </>


                )
            })}

            <div className="flex flex-col items-center justify-center p-6 mt-8 border-t-2 border-blue-100">
                <div className="bg-white border-2 border-green-500 rounded-2xl px-8 py-4 shadow-lg text-center">
                    <span className="block text-sm text-blue-600 font-semibold  ">قیمت نهایی</span>
                    <span className="text-3xl font-extrabold text-blue-900 mt-1">
                        {totalPrice.toLocaleString()} <span className="text-lg text-green-600">تومان</span>
                    </span>
                </div>

                <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md">
                    نهایی کردن خرید
                </button>
            </div>
        </div>
    )
}