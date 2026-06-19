import { Link } from "react-router-dom";

export default function Product({ item }) {
    return (
        <Link to={item.url} className="overflow-hidden flex-shrink-0 border cursor-pointer border-b-blue-800 w-[100px] h-[100px] rounded-full mb-4 hover:scale-105 ease-in-out transition">
            <img className=" object-cover " src={item.img} alt="" />
        </Link>
    )
}