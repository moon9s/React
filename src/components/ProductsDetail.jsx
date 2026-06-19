import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductsDetail({ product }) {

    const dispatch = useDispatch()
    return (
        <div className="container mx-auto px-4">

            <div className="bg-white border border-blue-100 shadow-xl flex flex-col md:flex-row rounded-3xl p-6 justify-center items-center mt-10 transition-transform duration-300 hover:shadow-2xl">


                <img
                    src={product.img}
                    alt={product.title}
                    className="w-64 h-64 object-contain rounded-2xl border border-slate-100"
                />


                <div className="p-6">
                    <h2 className="font-bold text-2xl text-blue-900">{product.title}</h2>
                    <p className="text-gray-600 pt-3 leading-relaxed">{product.description}</p>

                    <div className="flex items-center justify-between mt-6">
                        <span className="text-xl font-extrabold text-green-600">
                            {product.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">تومان</span>
                        </span>

                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-all rounded-full shadow-lg hover:shadow-blue-200 cursor-pointer"
                        >
                            اضافه کردن به سبد خرید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}