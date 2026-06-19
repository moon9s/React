import { Link } from "react-router-dom";

export default function Pr({ item }) {
    return (

        <div className="w-[400px] p-4 border flex flex-col justify-center mx-auto cursor-pointer rounded-2xl border-slate-300 shadow-2xl h-[400px] transition-all duration-500 hover:-translate-y-2">

            <img className="size-50 flex mx-auto items-center justify-center  " src={item.img} alt="" />
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-gray-600 pt-3 line-clamp-2">{item.description}</p>

            <div className="flex pt-10 flex-row justify-between">

                <span className="text-xl font-extrabold text-green-700 " >{item.price.toLocaleString()} {" "}
                    <span>تومان</span>
                </span>
                <Link to={`/product/${item.id}`} className="inline-block bg-blue-50 text-blue-600 text-xl font-bold hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full hover- border border-blue-200 ">{item.badge}</Link>


            </div>



        </div>

    )
}