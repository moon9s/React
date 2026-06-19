
import { useParams } from "react-router-dom";
import { pr } from "../constants/pr";
import ProductsDetail from "../components/ProductsDetail";


export default function ProductDetails() {
    const { id } = useParams();


    const product = pr.find(item => item.id.toString() === id.toString());





    return (
        <section className=" mx-auto min-h-screen p-8 bg-linear-to-t from-sky-500  to-indigo-500 ">
            <span className="text-3xl font-bold block bg-blue-100 text-blue-900 w-fit px-8 py-3 rounded-full border-b-4 border-green-500 mb-6">
                جزییات
            </span>



            <ProductsDetail product={product} />
        </section>
    );
}