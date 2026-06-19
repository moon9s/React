import { Link } from "react-router-dom";
import { products } from "../constants/products";

export default function PrHome({ item }) {
    return (
        <Link to="/pr"> <div className="gap-3 bg-white p-20 rounded-2xl border-2 border-blue-200 flex flex-col hover:-translate-y-2 transition-all ease-in-out  w-[350px]">
            <span className="flex justify-center items-center text-center h-[50px]" ><img src={item.img} alt="" /></span>
            <span className="text-blue-600">{item.badge}</span>
            <h2 className="font-bold text-xl"> {item.title} </h2>
            <p className="text-gray-400 whitespace-pre-line "  > {item.description} </p>

        </div></Link>
    )
}