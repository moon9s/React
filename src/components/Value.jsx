import { Link } from "react-router-dom";

export default function Value({ item }) {
    return (



        <div className="gap-3 bg-white p-20 rounded-2xl border-2 border-gray-200  flex flex-col items-center justify-center text-center w-[350px]">
            <span><img src={item.img} alt="" /></span>
            <h2 className="font-bold text-xl"> {item.title} </h2>
            <p className="text-gray-400 whitespace-pre-line "  > {item.description} </p>

        </div>

    )
}